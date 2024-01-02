/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'

import { Outlet } from 'react-router-dom'
import Layout from '@/layout/index'

const Login = lazy(() => import('@/views/login'))

const Index = lazy(() => import('@/views/index'))
const Count = lazy(() => import('@/views/count/index'))
const Error404 = lazy(() => import('@/views/error/404'))
const Error403 = lazy(() => import('@/views/error/403'))

export interface IRoute {
  path: string
  element?: JSX.Element
  meta: {
    title?: string
    icon?: JSX.Element
    hide?: boolean
  }
  redirect?: string
  children?: IRoute[]
}

export const menuList: IRoute[] = [
  {
    path: '/index',
    element: <Index />,
    meta: {
      title: '工作台',
      icon: <div className="i-bi:grid-fill" />,
    },
  },
  {
    path: '/count',
    element: <Count />,
    meta: {
      title: 'Count',
      icon: <div className="i-bi:stickies-fill" />,
    },
  },
  {
    path: '/test1',
    element: <div><Outlet /></div>,
    meta: {
      title: '测试1',
      icon: <div className="i-bi:stickies-fill" />,
    },
    children: [
      {
        path: '/test1/test1-1',
        element: <div>test1</div>,
        meta: {
          title: '测试1-1',
          icon: <div className="i-bi:stickies-fill" />,
        },
      },
    ],
  },
  {
    path: '/test2',
    element: <div><Outlet /></div>,
    meta: {
      title: '测试2',
      icon: <div className="i-bi:stickies-fill" />,
    },
    children: [
      {
        path: '/test2/test2-2',
        element: <div>test2-2</div>,
        meta: {
          title: '测试2-1',
          icon: <div className="i-bi:stickies-fill" />,
        },
      },
    ],
  },
]

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
    children: menuList,
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
