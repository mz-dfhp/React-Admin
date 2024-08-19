import { lazy } from 'react'
import { asyncRoutes } from './asyncRoutes'
import Layout from '@/layout/index'

export interface IRoute {
  path: string
  element: React.ReactNode | null
  meta: {
    title?: string
    icon?: JSX.Element
    hide?: boolean
  }
  redirect?: string
  children?: IRoute[]
}

export const routerList: IRoute[] = [
  {
    path: '/',
    element: <Layout />,
    meta: {
      title: '首页',
    },
    children: [...asyncRoutes],
  },
  {
    path: '/login',
    element: (Component => <Component />)(lazy(() => import('@/views/basics/login'))),
    meta: {
      title: '登录',
    },
  },
  {
    path: '*',
    element: (Component => <Component />)(lazy(() => import('@/views/basics/404'))),
    meta: {
      title: '404',
    },
  },
]
