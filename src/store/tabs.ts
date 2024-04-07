import { create } from 'zustand'
import type { TRoute } from './router'

interface State {
  tabsList: TRoute[]
}

interface Action {
  addTabs: (value: TRoute) => void
  closeLeftTabs: (key: string) => void
  closeRightTabs: (key: string) => void
  closeCurrentTabs: (key: string) => void
  closeOtherTabs: (key: string) => void
  closeAllTabs: (key: string) => void
}

const tabsStore = create<State & Action>(set => ({
  tabsList: [],
  addTabs: (value) => {
    set(state => ({ tabsList: state.tabsList.concat(value) }))
  },
  closeLeftTabs: (key) => {
    set((state) => {
      const list = [...state.tabsList]
      const index: number = list.findIndex(item => item.key === key)
      index !== -1 && list.splice(1, index - 1)
      return { tabsList: list }
    })
  },
  closeRightTabs: (key) => {
    set((state) => {
      const list = [...state.tabsList]
      const index: number = list.findIndex(item => item.key === key)
      index !== -1 && list.splice(index + 1)
      return { tabsList: list }
    })
  },
  closeCurrentTabs: (key) => {
    set((state) => {
      const list = [...state.tabsList]
      const index: number = list.findIndex(item => item.key === key)
      index !== -1 && list.splice(index, 1)
      return { tabsList: list }
    })
  },
  closeOtherTabs: (key) => {
    set((state) => {
      return { tabsList: state.tabsList.filter((item, index) => item.key === key || index === 0) }
    })
  },
  closeAllTabs: () => {
    set((state) => {
      const list = [...state.tabsList]
      list.splice(1)
      return { tabsList: list }
    })
  },
}))

export { tabsStore }
