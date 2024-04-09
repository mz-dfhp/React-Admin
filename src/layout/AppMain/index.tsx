import React, { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'

const AppMain: React.FC = () => {
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

export default memo(AppMain)
