import { lazy } from 'react'
import { IRoute } from './index'
const Login = lazy(() => import('@/views/login'))

const routeName = 'Login'
export const basicsRoutes: IRoute[] = [
  {
    path: '/login',
    name: routeName,
    element: <Login />,
    meta: {
      title: '登录'
    }
  }
]
