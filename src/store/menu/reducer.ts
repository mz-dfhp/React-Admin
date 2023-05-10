import { IAcitionType } from '../types'
import { SETMENU } from './actionType'
import { IRoute } from '@/router'

export interface IMenu extends IRoute {
  key?: string
  label?: string
  title?: string
  icon?: JSX.Element
  children?: IMenu[]
}
interface IMenuState {
  menuList: IMenu[]
}
export const menuState: IMenuState = {
  menuList: []
}
export default function menuReducer(
  state = menuState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case SETMENU:
      return { ...state, menuList: action.menuList as IMenu[] }
    default:
      return state
  }
}
