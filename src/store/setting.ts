import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  isDark: boolean
}

interface Action {
  toggleDark: () => void
}

const settingStore = create(persist<State & Action>(set => ({
  isDark: false,
  toggleDark: () => {
    set(state => ({ isDark: !state.isDark }))
  },
}), {
  name: 'setting-storage',
  storage: createJSONStorage(() => localStorage),
}))

export { settingStore }
