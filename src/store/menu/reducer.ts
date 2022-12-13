import { IAcitionType } from '../types'
import { SETMENU } from './actionType'

export interface IMenu {
  key?: string
  label?: string
  icon?: JSX.Element
  children?: IMenu[]
}
interface IMenuState {
  menuList: IMenu[]
}
export const countState: IMenuState = {
  menuList: []
}
export default function menuReducer(
  state = countState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case SETMENU:
      return { ...state, menuList: action.menuList as IMenu[] }
    default:
      return state
  }
}
