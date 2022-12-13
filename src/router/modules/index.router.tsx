import { lazy } from 'react'
import { IRoute } from '../index'
import { AppstoreOutlined } from '@ant-design/icons'

const Index = lazy(() => import('@/views/index'))

const routeName = 'Index'
const route: IRoute = {
  path: 'index',
  element: <Index />,
  name: routeName,
  meta: {
    title: '工作台',
    sort: 0,
    icon: <AppstoreOutlined />
  }
}
export default route
