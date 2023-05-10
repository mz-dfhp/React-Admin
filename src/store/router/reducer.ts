import { IAcitionType } from '../types'
import { SETROUTES } from './actionType'
import { IRoute, basicsRoutes } from '@/router'
interface IRouterState {
  routerList: IRoute[]
}
export const routerState: IRouterState = {
  routerList: [...basicsRoutes]
}
export default function routerReducer(
  state = routerState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case SETROUTES:
      return { ...state, routerList: action.routerList as IRoute[] }
    default:
      return state
  }
}
