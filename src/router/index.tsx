import { basicsRoutes } from './basicsRoutes'
import { asyncRoutes, errorRoutes } from './asyncRoutes'

export interface IRoute {
  path: string
  name?: string
  element?: JSX.Element
  meta?: {
    title?: string
    icon?: JSX.Element
    hide?: boolean
    sort?: number
  }
  children?: IRoute[]
}

export { basicsRoutes, errorRoutes, asyncRoutes }
