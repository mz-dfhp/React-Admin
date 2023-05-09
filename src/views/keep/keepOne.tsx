import { memo } from 'react'

const KeepOne = () => {
  return <div>缓存组件一</div>
}

export default memo(KeepOne)
