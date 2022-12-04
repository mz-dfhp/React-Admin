import { Layout } from 'antd'
import React, { memo } from 'react'
const { Header } = Layout

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const AppHeader = ({
  collapsed,
  setCollapsed
}: {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Header className="app-header !bg-white !px-20px">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed)
      })}
    </Header>
  )
}
export default memo(AppHeader)
