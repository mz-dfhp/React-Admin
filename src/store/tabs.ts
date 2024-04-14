import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface Tabs {
  key: string
  label: string
  closable: boolean
}

interface State {
  tabsList: Tabs[]
}

interface Action {
  addTabs: (value: Tabs) => void
  closeLeftTabs: (key: string) => void
  closeRightTabs: (key: string) => void
  closeCurrentTabs: (key: string) => void
  closeOtherTabs: (key: string) => void
  closeAllTabs: () => void
}

const tabsStore = create(persist<State & Action>(set => ({
  tabsList: [],
  addTabs: (value) => {
    set(state => ({ tabsList: state.tabsList.concat(value) }))
  },
  closeLeftTabs: (key) => {
    set((state) => {
      const i = state.tabsList.findIndex(item => item.key === key)
      return { tabsList: state.tabsList.filter((item, index) => index >= i || !item.closable) }
    })
  },
  closeRightTabs: (key) => {
    set((state) => {
      const i = state.tabsList.findIndex(item => item.key === key)
      return { tabsList: state.tabsList.filter((item, index) => index <= i || !item.closable) }
    })
  },
  closeCurrentTabs: (key) => {
    set((state) => {
      return { tabsList: state.tabsList.filter(item => item.key !== key || !item.closable) }
    })
  },
  closeOtherTabs: (key) => {
    set((state) => {
      return { tabsList: state.tabsList.filter(item => item.key === key || !item.closable) }
    })
  },
  closeAllTabs: () => {
    set((state) => {
      return { tabsList: state.tabsList.filter(item => !item.closable) }
    })
  },
}), {
  name: 'tabs-store',
  storage: createJSONStorage(() => localStorage),
}))

export { tabsStore }
