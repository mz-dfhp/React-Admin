import { lazy } from 'react'
import { IRoute } from '../index'

const Index = lazy(() => import('@/views/index'))

const routeName = 'Index'
const route: IRoute = {
  path: 'index',
  element: <Index />,
  name: routeName,
  meta: {
    title: '工作台',
    sort: 0,
    icon: <div className="i-bi:grid-fill" />
  }
}
export default route
