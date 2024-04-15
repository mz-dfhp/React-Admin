import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  isDark: boolean
  locale: 'en' | 'zh-cn'
}

interface Action {
  toggleDark: () => void
  toggleLocale: (value: State['locale']) => void
}

const settingStore = create(persist<State & Action>(set => ({
  isDark: false,
  toggleDark: () => {
    set(state => ({ isDark: !state.isDark }))
  },
  locale: 'zh-cn',
  toggleLocale: (value) => {
    set(() => ({ locale: value }))
  },
}), {
  name: 'setting-storage',
  storage: createJSONStorage(() => localStorage),
}))

export { settingStore }
