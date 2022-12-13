import React, { memo } from 'react'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const AppHeader: React.FC<{
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ collapsed, setCollapsed }) => {
  return (
    <div>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed)
      })}
    </div>
  )
}
export default memo(AppHeader)
