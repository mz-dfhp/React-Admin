import { IAcitionType } from '../types'
import { SETROUTES, SETROUTEROBJ } from './actionType'
import { IRoute, TRouterObj } from '@/router'
interface IRouterState {
  routerList: IRoute[]
  routerObj: TRouterObj
}

export const routerState: IRouterState = {
  routerList: [],
  routerObj: {}
}
export default function routerReducer(
  state = routerState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case SETROUTES:
      return { ...state, routerList: action.routerList as IRoute[] }
    case SETROUTEROBJ:
      return { ...state, routerObj: action.routerObj as TRouterObj }
    default:
      return state
  }
}
