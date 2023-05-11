import { IRoute } from '../index'
import { Outlet } from 'react-router-dom'
import Layout from '@/layout/index'

const route: IRoute = {
  path: '/demo',
  element: <Layout />,
  meta: {
    title: 'Demo',
    sort: 1,
    icon: <div className="i-bi:stickies-fill" />
  },
  redirect: 'demo-one',
  children: [
    {
      path: 'demo-one',
      element: <Outlet />,
      meta: {
        title: 'demo-one'
      },
      redirect: 'demo-one-son',
      children: [
        {
          path: 'demo-one-son',
          element: <div>demo-one-son</div>,
          meta: {
            title: 'demo-one-son'
          }
        }
      ]
    },
    {
      path: 'demo-two',
      element: <div>demo-two</div>,
      meta: {
        title: 'demo-two'
      }
    }
  ]
}

export default route
