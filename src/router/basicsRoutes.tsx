import { lazy } from 'react'
import { IRoute } from './index'

const Login = lazy(() => import('@/views/login'))

export const basicsRoutes: IRoute[] = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录'
    }
  }
]
