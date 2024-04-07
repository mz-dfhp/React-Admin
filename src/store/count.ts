import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  count: number
}

interface Action {
  increment: (value: number) => void
  decrement: (value: number) => void
}

const countStore = create(persist<State & Action>(set => ({
  count: 1,
  increment: (value) => {
    set(state => ({ count: state.count + value }))
  },
  decrement: (value) => {
    set(state => ({ count: state.count - value }))
  },
}), {
  name: 'count-storage',
  storage: createJSONStorage(() => localStorage),
}))

export { countStore }
