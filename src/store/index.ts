import {
  legacy_createStore as createStore,
  applyMiddleware,
  Action
} from 'redux'

import { composeWithDevTools } from '@redux-devtools/extension'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import { persistStore } from 'redux-persist'

import allReducer from './reducer'

const middleware = applyMiddleware(thunkMiddleware) // store 中间件
const reduxDevtools = composeWithDevTools(middleware) //调试工具
const store = createStore(allReducer, reduxDevtools)

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const persistor = persistStore(store)
export default store
