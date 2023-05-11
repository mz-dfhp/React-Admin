import { lazy } from 'react'
import { IRoute } from '../index'
import Layout from '@/layout/index'

const KeepOne = lazy(() => import('@/views/keep/keepOne'))
const KeepTwo = lazy(() => import('@/views/keep/keepTwo'))

const route: IRoute = {
  path: '/keep',
  element: <Layout />,
  meta: {
    title: 'Keep缓存',
    sort: 2,
    icon: <div className="i-bi:mastodon" />
  },
  redirect: 'keep-one',
  children: [
    {
      path: 'keep-one',
      element: <KeepOne />,
      meta: {
        title: 'keep-one'
      }
    },
    {
      path: 'keep-two',
      element: <KeepTwo />,
      meta: {
        title: 'keep-two'
      }
    }
  ]
}

export default route
