import { SETMENU } from './actionType'
import { IMenu } from './reducer'

export const setMenu = (menuList: IMenu[]) => {
  return { type: SETMENU, menuList }
}
