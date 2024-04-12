import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'

import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import { routerList } from '@/router'
import { userStore } from '@/store/user'

import 'dayjs/locale/zh-cn'
import { settingStore } from '@/store/setting'

dayjs.locale('zh-cn')

function App() {
  const { isDark } = settingStore()
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
  useEffect(() => {
    const html = document.querySelector('html')
    html?.classList.add(isDark ? 'dark' : 'light')
    html?.classList.remove(isDark ? 'light' : 'dark')
  }, [isDark])
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        cssVar: true,
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
