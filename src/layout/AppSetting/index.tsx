import React, { memo } from 'react'

const AppSetting: React.FC = () => {
  return (
    <div className=" fixed right-0 top-50% translate-y--50% p10px setting-box rounded-l-xl">
      <div className="hover-animate-spin i-zondicons-cog h-25px w-25px cursor-pointer"></div>
    </div>
  )
}

export default memo(AppSetting)
