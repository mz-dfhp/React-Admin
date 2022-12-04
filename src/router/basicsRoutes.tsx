import { lazy } from 'react'
const Login = lazy(() => import('@/views/login'))

export const basicsRoutes = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录'
    }
  }
]
