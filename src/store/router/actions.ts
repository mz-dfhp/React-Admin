import { AppThunk } from '@/store'
import { SETROUTES, SETROUTEROBJ } from './actionType'
import { flatRoutes } from '@/utils/route'
import { IRoute } from '@/router'
import { cloneDeep } from 'lodash-es'

export const setRoutes =
  (routerList: IRoute[]): AppThunk =>
  async (dispatch) => {
    dispatch({ type: SETROUTES, routerList })
    dispatch({
      type: SETROUTEROBJ,
      routerObj: flatRoutes(cloneDeep(routerList))
    })
  }
