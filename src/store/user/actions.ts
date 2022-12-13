import { ILoginForm } from '@/interface/user'
import { getUserInfo, loginIn } from '@/api/user'
import { AppThunk } from '../index'
import { SETTOKEN, SETUSERINFO } from './actionType'

export const setToken =
  (login: ILoginForm): AppThunk =>
  async (dispatch) => {
    const token = await loginIn(login)
    dispatch({
      type: SETTOKEN,
      token
    })
  }

export const setUserInfo: AppThunk = async (dispatch, getState) => {
  const { userStore } = getState()
  const userInfo = await getUserInfo(userStore.token)
  dispatch({ type: SETUSERINFO, userInfo })
}
