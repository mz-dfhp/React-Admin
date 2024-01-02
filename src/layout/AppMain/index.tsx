import React, { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'

const AppMain: React.FC = () => {
  return (
    <Suspense
      fallback={(
        <div className="h-100% w-100% flex-center">
          <Spin size="large" />
        </div>
      )}
    >
      <Outlet />
    </Suspense>
  )
}

export default memo(AppMain)
