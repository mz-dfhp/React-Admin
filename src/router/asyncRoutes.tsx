import { lazy } from 'react'
import { RouteObject, Outlet } from 'react-router-dom'
const Layout = lazy(() => import('@/layout/index'))
// import Layout from '@/layout/index'
import Index from '@/views/index'
import ComponentOne from '@/views/component/componentOne'
import ComponentTwo from '@/views/component/componentTwo'

// const Layout = lazy(() => import('@/layout/index'))
// import Layout from '@/layout/index'
// const Index = lazy(() => import('@/views/index'))
// const ComponentOne = lazy(() => import('@/views/component/componentOne'))
// const ComponentTwo = lazy(() => import('@/views/component/componentTwo'))
export const asyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'index',
        element: <Index />
      },
      {
        path: 'demo',
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: 'demo-one',
            element: <div>demo-one</div>
          },
          {
            path: 'demo-two',
            element: <div>demo-two</div>
          }
        ]
      },
      {
        path: 'component',
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: 'component-one',
            element: <ComponentOne />
          },
          {
            path: 'component-two',
            element: <ComponentTwo />
          }
        ]
      }
    ]
  }
]

export const errorRoutes = [
  {
    path: '*',
    element: <div>404</div>,
    meta: {
      title: '404'
    }
  },
  {
    path: '/403',
    element: <div>403</div>,
    meta: {
      title: '403'
    }
  }
]
