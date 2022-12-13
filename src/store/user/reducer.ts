import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { IUserInfo } from '@/interface/user'
import { SETTOKEN, SETUSERINFO } from './actionType'
interface IUserStore {
  token: string
  userInfo: IUserInfo
}
export const userState: IUserStore = {
  token: '',
  userInfo: { permission: [] }
}
const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['token']
}

function userReducer(
  state = userState,
  action: { type: string; token: string; userInfo: IUserInfo }
) {
  switch (action.type) {
    case SETTOKEN:
      return { ...state, token: action.token as string }
    case SETUSERINFO:
      return { ...state, userInfo: action.userInfo as IUserInfo }
    default:
      return state
  }
}

export default persistReducer(userPersistConfig, userReducer)
