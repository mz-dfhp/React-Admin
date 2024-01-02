import React, { memo } from 'react'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown } from 'antd'
import { userStore } from '@/store/user'

const AppHeader: React.FC<{ collapsed: boolean, setCollapsed: (e: boolean) => void }> = ({ collapsed, setCollapsed }) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '退出登录',
    },
  ]

  const { userInfo } = userStore()
  function onDropdownClick({ key }: any) {
    if (key === '1') {
      window.localStorage.clear()
      window.location.reload()
    }
  }
  return (
    <div className="h-100% flex-between">
      <div
        className={`cursor-pointer  text-18px ${`${collapsed ? 'i-bi:text-indent-left' : 'i-bi:text-indent-right'}`}`}
        onClick={() => setCollapsed(!collapsed)}
      />
      <div>
        <Dropdown
          menu={{ items, onClick: onDropdownClick }}
          placement="bottom"
        >
          <div className="h-40px flex-center cursor-pointer rounded-8px p-x-5px hover:bg-gray-100">
            <span className="m-r-10px">{userInfo.username || '-'}</span>
            <a onClick={e => e.preventDefault()}>
              <Avatar size={30} src={userInfo.avatar} />
            </a>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}
export default memo(AppHeader)
