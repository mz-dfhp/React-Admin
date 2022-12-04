import { RouteObject } from 'react-router-dom'
import { basicsRoutes } from './basicsRoutes'
import { asyncRoutes, errorRoutes } from './asyncRoutes'

const router: RouteObject[] = [...basicsRoutes, ...errorRoutes, ...asyncRoutes]

export default router
