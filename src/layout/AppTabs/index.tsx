import React, { useEffect, useMemo, useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Tabs } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { tabsStore } from '@/store/tabs'
import { routerStore } from '@/store/router'
import './index.scss'

const operateList = [
  { id: 1, title: '刷新当前', icon: 'i-bi-arrow-repeat' },
  { id: 2, title: '关闭当前', icon: 'i-bi:x-lg' },
  { id: 3, title: '关闭其他', icon: 'i-bi:x-lg' },
  { id: 4, title: '关闭左侧', icon: 'i-bi:arrow-left-circle' },
  { id: 5, title: '关闭右侧', icon: 'i-bi:arrow-right-circle' },
  { id: 6, title: '关闭全部', icon: 'i-bi:x-lg' },
]
const AppTabs: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { tabsList, addTabs, closeCurrentTabs } = tabsStore()
  const { routerList } = routerStore()
  const [activeKey, setActiveKey] = useState('')

  function onChange(key: string) {
    setActiveKey(key)
  }

  function onEdit(key: any) {
    const index = tabsList.findIndex(item => item.key === key)
    if (tabsList[index].key === activeKey) {
      closeCurrentTabs(key)
      navigate(tabsList[index === 0 ? 1 : index - 1].key, { replace: true })
    }
    else {
      closeCurrentTabs(key)
    }
  }

  function onTabClick(key: any) {
    navigate(key)
  }

  const dropdownList: MenuProps['items'] = useMemo(() => {
    return operateList.map((item) => {
      return {
        key: item.id,
        label: (
          <div className="flex items-center">
            <div>{ item.title}</div>
            <div className={`${item.icon} m-l-5px`}></div>
          </div>
        ),
        disabled: true,
      }
    })
  }, [])

  useEffect(() => {
    if (location.pathname === activeKey)
      return
    const item = routerList.find(item => item.key === location.pathname)
    const index = tabsList.findIndex(item => item.key === location.pathname)
    index === -1 && item && addTabs(item)
    setActiveKey(location.pathname)
  }, [activeKey, addTabs, location.pathname, routerList, tabsList])

  return (
    <div
      className="flex items-center overflow-hidden p-x-5px"
    >
      <div className="flex-1 overflow-hidden">
        <Tabs
          className="custom-tabs"
          hideAdd
          onChange={onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={onEdit}
          onTabClick={onTabClick}
          items={tabsList}
        />
      </div>
      <Dropdown menu={{ items: dropdownList }} placement="bottomRight">
        <div
          className="i-bi:grid-fill m-l-auto w-50px flex-shrink-0 cursor-pointer text-16px"
        >
        </div>
      </Dropdown>
    </div>
  )
}

export default AppTabs
