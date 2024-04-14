import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'

export default function AppMain() {
  return (
    <Suspense
      fallback={(
        <div className="h-full w-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    >
      <Outlet />
    </Suspense>
  )
}
