/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { modulesRoutes } from './moduleRoutes'
import Layout from '@/layout/index'

const Login = lazy(() => import('@/views/login'))

const Error404 = lazy(() => import('@/views/error/404'))
const Error403 = lazy(() => import('@/views/error/403'))

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

export const staticList: IRoute[] = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录',
    },
  },
]

export const routerList: IRoute[] = [
  {
    path: '/',
    element: <Layout />,
    meta: {
      title: '首页',
    },
    children: modulesRoutes,
  },
  ...staticList,
  {
    path: '403',
    element: <Error403 />,
    meta: {
      title: '404',
    },
  },
  {
    path: '*',
    element: <Error404 />,
    meta: {
      title: '404',
    },
  },
]
