import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { IRoute } from '../index'

const ComponentOne = lazy(() => import('@/views/component/componentOne'))
const ComponentTwo = lazy(() => import('@/views/component/componentTwo'))

const routeName = 'Component'
const route: IRoute = {
  path: 'component',
  name: routeName,
  element: <Outlet />,
  meta: {
    title: 'Component',
    sort: 2,
    icon: <div className="i-bi:yelp" />
  },
  children: [
    {
      path: 'component-one',
      name: `${routeName}-one`,
      element: <ComponentOne />,
      meta: {
        title: 'component-one'
      }
    },
    {
      path: 'component-two',
      name: `${routeName}-two`,
      element: <ComponentTwo />,
      meta: {
        title: 'component-two'
      }
    }
  ]
}

export default route
