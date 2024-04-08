import React, { memo, useContext } from 'react'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown } from 'antd'
import { userStore } from '@/store/user'
import { AppLayoutContext } from '@/layout'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '退出登录',
  },
]
const AppHeader: React.FC<{ collapsed: boolean, setCollapsed: (e: boolean) => void }> = ({ collapsed, setCollapsed }) => {
  const { userInfo } = userStore()
  const { refresh } = useContext(AppLayoutContext)
  function onDropdownClick({ key }: any) {
    if (key === '1') {
      window.localStorage.clear()
      window.location.reload()
    }
  }
  return (
    <div className="h-60px flex-between p-x-20px">
      <div
        className={`cursor-pointer  text-18px ${`${collapsed ? 'i-bi:text-indent-left' : 'i-bi:text-indent-right'}`}`}
        onClick={() => setCollapsed(!collapsed)}
      />
      <div className="m-l-auto flex items-center justify-around p-x-25px">
        <div
          className="i-bi-github m-l-15px cursor-pointer transition-all hover-scale-120"
          onClick={() => window.open('https://github.com/mz-dfhp/React-Admin')}
        >
        </div>
        <div
          className={`${false ? 'i-bi:fullscreen-exit' : 'i-bi:arrows-angle-expand'}  m-l-20px  cursor-pointer hover-scale-120 transition-all`}
        >
        </div>
        <div
          className={`${false ? 'i-bi:moon' : 'i-bi:sun'}  m-l-20px  cursor-pointer hover-scale-120 transition-all`}
        >
        </div>
        <div
          className="i-bi-arrow-repeat m-l-20px cursor-pointer text-16px transition-all hover-scale-120"
          onClick={refresh}
        >
        </div>
      </div>
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
