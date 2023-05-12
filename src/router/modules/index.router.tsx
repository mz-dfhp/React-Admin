import { lazy } from 'react'
import { IRoute } from '../index'
import Layout from '@/layout/index'

const Index = lazy(() => import('@/views/index'))

const route: IRoute = {
  path: '/',
  element: <Layout />,
  meta: {
    title: '首页',
    sort: 1,
    icon: <div className="i-bi:stickies-fill" />
  },
  children: [
    {
      path: 'index',
      element: <Index />,
      meta: {
        title: '工作台'
      }
    }
  ]
}
export default route
