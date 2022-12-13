import { useNavigate } from 'react-router-dom'
import { Button, theme } from 'antd'

const { useToken } = theme
export default function Error403() {
  const { token } = useToken()
  const navigate = useNavigate()
  const goToIndex = () => {
    navigate('/index')
  }
  return (
    <div
      className="error-page flex-center flex-col w100vw h100vh"
      style={{ backgroundColor: token.colorPrimary }}
    >
      <div className="text-30 animate-bounce">403</div>
      <Button
        onClick={() => {
          goToIndex()
        }}
      >
        去首页
      </Button>
    </div>
  )
}
