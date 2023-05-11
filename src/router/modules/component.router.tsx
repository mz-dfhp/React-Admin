import { lazy } from 'react'
import { IRoute } from '../index'
import Layout from '@/layout/index'

const ComponentOne = lazy(() => import('@/views/component/componentOne'))
const ComponentTwo = lazy(() => import('@/views/component/componentTwo'))

const route: IRoute = {
  path: '/component',
  element: <Layout />,
  meta: {
    title: 'Component',
    sort: 2,
    icon: <div className="i-bi:yelp" />
  },
  redirect: 'component-one',
  children: [
    {
      path: 'component-one',
      element: <ComponentOne />,
      meta: {
        title: 'component-one'
      }
    },
    {
      path: 'component-two',
      element: <ComponentTwo />,
      meta: {
        title: 'component-two'
      }
    }
  ]
}

export default route
