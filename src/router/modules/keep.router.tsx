import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { IRoute } from '../index'

const KeepOne = lazy(() => import('@/views/keep/keepOne'))
const KeepTwo = lazy(() => import('@/views/keep/keepTwo'))

const routeName = 'Keep'
const route: IRoute = {
  path: 'keep',
  name: routeName,
  element: <Outlet />,
  meta: {
    title: 'Keep缓存',
    sort: 2,
    icon: <div className="i-bi:mastodon" />
  },
  children: [
    {
      path: 'keep-one',
      name: `${routeName}-one`,
      element: <KeepOne />,
      meta: {
        title: 'keep-one'
      }
    },
    {
      path: 'keep-two',
      name: `${routeName}-two`,
      element: <KeepTwo />,
      meta: {
        title: 'keep-two'
      }
    }
  ]
}

export default route
