import { basicsRoutes } from './basicsRoutes'
import { asyncRoutes, errorRoutes } from './asyncRoutes'
import type { NavigateFunction } from 'react-router-dom'

export interface IRoute {
  path: string
  element?: JSX.Element
  meta?: {
    title?: string
    icon?: JSX.Element
    hide?: boolean
    sort?: number
  }
  redirect?: string
  children?: IRoute[]
  breadcrumb?: {
    path?: string
    title?: string
    hide?: boolean | undefined
  }[]
}

export type TRouterObj = Record<string, IRoute>

export function beforeEach(route: IRoute, navigate: NavigateFunction): void {
  document.title = route?.meta?.title || 'mz-react-admin'
  if (route?.redirect) {
    navigate(route.redirect)
  }
}

export { basicsRoutes, errorRoutes, asyncRoutes }
