import { ADDTAB, REMOVETAB } from './actionType'
import { ITabState } from './reducer'

export const addTab = (tabList: ITabState['tabList']) => ({
  type: ADDTAB,
  tabList
})

export const removeTab = (tabList: ITabState['tabList']) => ({
  type: REMOVETAB,
  tabList
})
