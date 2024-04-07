import { useEffect, useState } from 'react'
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
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(false)
    if (token) {
      if (location.pathname === '/')
        navigate('/index', { replace: true })
      else if (location.pathname === '/login')
        navigate('/', { replace: true })
    }
    else {
      navigate('/login', { replace: true })
    }
    setLoad(true)
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
      {load && element}
    </ConfigProvider>
  )
}

export default App
