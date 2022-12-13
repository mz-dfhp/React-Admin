import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'
const AppMain: React.FC = () => {
  return (
    <div className="m-20px">
      <Suspense
        fallback={
          <div className="w-100% h-100% flex-center">
            <Spin size="large" />
          </div>
        }
      >
        <div className="app-main bg-white p-20px min-h-100%">
          <Outlet />
        </div>
      </Suspense>
    </div>
  )
}

export default memo(AppMain)
