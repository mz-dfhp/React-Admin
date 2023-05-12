import React, { memo } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Avatar } from 'antd'
import { useAppSelector } from '@/hooks/redux'
import BreadcrumbNav from './components/BreadcrumbNav'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '退出登陆'
  },
  {
    key: '2',
    label: '暂未添加更多'
  }
]

const onDropdownClick: MenuProps['onClick'] = ({ key }) => {
  if (key === '1') return window.localStorage.clear(), window.location.reload()
}

const AppHeader: React.FC<{
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ collapsed, setCollapsed }) => {
  const {
    userInfo: { avatar }
  } = useAppSelector((state) => state.userStore)
  return (
    <div className="flex-between h-100%">
      <div
        className={`${
          (collapsed ? 'i-bi:text-indent-left' : 'i-bi:text-indent-right') +
          ' cursor-pointer text-18px'
        }`}
        onClick={() => setCollapsed(!collapsed)}
      />
      <div className="flex-between flex-1 hidden md:flex">
        <BreadcrumbNav />
        <div className="m-l-a! p-x-30px flex">
          <div className="i-bi-github  cursor-pointer m-l-15px hover-scale-120 transition-all" />
          <div className="i-bi-arrow-repeat  cursor-pointer m-l-15px hover-scale-120 transition-all" />
        </div>
      </div>
      <div>
        <Dropdown
          menu={{ items, onClick: onDropdownClick }}
          placement="bottomLeft"
          arrow
        >
          <div className="h-50px flex-center">
            <a onClick={(e) => e.preventDefault()}>
              <Avatar size={40} src={avatar} />
            </a>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}
export default memo(AppHeader)
