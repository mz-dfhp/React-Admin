import React, { memo, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuProps } from 'antd'
import Logo from '@/assets/logo.svg'

import { useAppSelector } from '@/hooks/redux'
import { ItemType } from 'antd/es/menu/hooks/useItems'

const AppMenu: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const menuList = useAppSelector(
    (state) => state.menuStore.menuList
  ) as ItemType[]
  console.log('我创建了')
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const openKeys = location.pathname.split('/').reduce((pre, cur) => {
      if (cur && cur.indexOf('?') === -1) {
        cur = `${pre.slice(-1) || ''}${cur.startsWith('/') ? cur : '/' + cur}`
        return [...pre, cur]
      } else {
        return pre
      }
    }, [] as string[])
    console.log(openKeys)
    setOpenKeys(openKeys)
    setActiveKeys([location.pathname])
    return () => {
      console.log('我销毁了')
    }
  }, [location.pathname])
  const changeMenu = ({ key }: { key: string }) => {
    navigate(key)
  }
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
    if (!menuList.map((item) => item?.key).includes(latestOpenKey as string)) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
    <div className="h-100vh">
      <div className="logo h-64px w-100% text-white  flex-center">
        <img
          src={Logo}
          className="logo animate-spin animate-duration-3s m-r-10px"
          alt="React logo"
        />
        {!collapsed && <div>木子</div>}
      </div>
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={activeKeys}
        onClick={(e) => changeMenu(e)}
        items={menuList}
      />
    </div>
  )
}
export default memo(AppMenu)
