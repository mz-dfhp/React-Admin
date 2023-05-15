import { IAcitionType } from '../types'
import { ADDTAB, REMOVETAB } from './actionType'

export interface ITabState {
  tabList: any
}
export const tabState: ITabState = {
  tabList: []
}
export default function tabReducer(
  state = tabState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case ADDTAB:
      return { ...state, tabList: action.tabList as ITabState['tabList'] }
    case REMOVETAB:
      return { ...state, tabList: action.tabList as ITabState['tabList'] }
    default:
      return state
  }
}
