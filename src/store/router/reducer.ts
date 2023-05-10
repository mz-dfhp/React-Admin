import { IAcitionType } from '../types'
import { SETROUTES } from './actionType'
import { IRoute } from '@/router'

interface IRouterState {
  routerList: IRoute[]
}
export const routerState: IRouterState = {
  routerList: []
}
export default function routerReducer(
  state = routerState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case SETROUTES:
      return { ...state, routerList: action.routerList }
    default:
      return state
  }
}
