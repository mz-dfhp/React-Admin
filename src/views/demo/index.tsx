import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { memo } from 'react'
const Demo = ({ Outlet }: { Outlet: React.ReactNode }) => {
  const navigate = useNavigate()
  const goToPage = (path: string) => {
    navigate(path)
  }
  return (
    <div>
      <Button onClick={() => goToPage('/index')}>index</Button>
      <Button onClick={() => goToPage('/demo/demo-one')}>/demo/demo-one</Button>
      {Outlet}
    </div>
  )
}

export default memo(Demo)
