import { Outlet } from 'react-router-dom'
import { IRoute } from '../index'
import { AppstoreOutlined } from '@ant-design/icons'

const routeName = 'Demo'
const route: IRoute = {
  path: 'demo',
  name: routeName,
  element: <Outlet />,
  meta: {
    title: 'Demo',
    sort: 1,
    icon: <AppstoreOutlined />
  },
  children: [
    {
      path: 'demo-one',
      name: `${routeName}-one`,
      element: <Outlet />,
      meta: {
        title: 'demo-one'
      },
      children: [
        {
          path: 'demo-one-son',
          name: `${routeName}-one-son`,
          element: <div>demo-one-son</div>,
          meta: {
            title: 'demo-one-son'
          }
        }
      ]
    },
    {
      path: 'demo-two',
      name: `${routeName}-two`,
      element: <div>demo-two</div>,
      meta: {
        title: 'demo-two'
      }
    }
  ]
}

export default route
