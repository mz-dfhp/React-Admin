import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout
const AppContent = () => {
  return (
    <Content className="app-content overflow-auto m-20px bg-Main">
      <div className="app-main bg-white min-h-100%">
        <Outlet />
      </div>
    </Content>
  )
}

export default memo(AppContent)
