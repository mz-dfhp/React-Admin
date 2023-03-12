import React, { memo } from 'react'

const AppHeader: React.FC<{
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ collapsed, setCollapsed }) => {
  return (
    <div className="flex items-center h-100%">
      <div
        className={
          collapsed
            ? 'i-zondicons-align-left'
            : 'i-zondicons-align-right' + ' cursor-pointer'
        }
        onClick={() => setCollapsed(!collapsed)}
      ></div>
    </div>
  )
}
export default memo(AppHeader)
