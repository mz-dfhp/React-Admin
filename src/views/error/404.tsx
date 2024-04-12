import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function Error404() {
  const navigate = useNavigate()
  const goToIndex = () => {
    navigate('/index')
  }
  return (
    <div
      className="error-page h-full w-full flex justify-center items-center flex-col"
      style={{ backgroundImage: 'linear-gradient(25deg, #094089, #7e536a, #bb6947, #f38100)' }}
    >
      <div className="animate-bounce text-[30px]">404</div>
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
