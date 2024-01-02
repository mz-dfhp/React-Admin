import { useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import { routerList } from '@/router'
import { userStore } from '@/store/user'

import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const element = useRoutes(routerList)
  const { token } = userStore()
  useEffect(() => {
    if (token) {
      if (location.pathname === '/')
        navigate('/index', { replace: true })
      else if (location.pathname === '/login')
        navigate('/', { replace: true })
    }
    else {
      navigate('/login', { replace: true })
    }
  }, [location.pathname, navigate, token])
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          fontSize: 14,
        },
      }}
    >
      {element}
    </ConfigProvider>
  )
}

export default App
