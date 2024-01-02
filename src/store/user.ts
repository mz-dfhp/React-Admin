import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  token: string
  userInfo: {
    username: string
    avatar: string
  }
}

interface Actions {
  setToken: (value: string) => void
  setUserInfo: (value: State['userInfo']) => void
}

const userStore = create(persist<State & Actions>(set => ({
  token: '',
  userInfo: {
    username: '',
    avatar: '',
  },
  setToken: (value) => {
    set(() => ({ token: value }))
  },
  setUserInfo: (value) => {
    set(() => ({ userInfo: value }))
  },
}), {
  name: 'user-store',
  storage: createJSONStorage(() => localStorage),
}))

export { userStore }
