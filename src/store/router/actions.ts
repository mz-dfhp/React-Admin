import { IRoute } from '@/router'
import { SETROUTES } from './actionType'

export const setRoutes = (routerList: IRoute[]) => {
  return { type: SETROUTES, routerList }
}
