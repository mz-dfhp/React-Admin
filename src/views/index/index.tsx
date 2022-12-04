import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
export default function Index() {
  const navigate = useNavigate()
  const goToPage = (path: string) => {
    navigate(path)
  }
  return (
    <div>
      <Button onClick={() => goToPage('/login')}>login</Button>
      <Button onClick={() => goToPage('/demo/demo-one')}>demo</Button>
    </div>
  )
}
