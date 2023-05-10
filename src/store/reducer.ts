import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import countReducer from './count'
import userReducer from './user'
import menuReducer from './menu'
import routerReducer from './router'

const persistConfig = {
  key: 'redux_persist',
  storage,
  whitelist: ['userStore']
}

export default persistReducer(
  persistConfig,
  combineReducers({
    countStore: countReducer,
    userStore: userReducer,
    menuStore: menuReducer,
    routerStore: routerReducer
  })
)
