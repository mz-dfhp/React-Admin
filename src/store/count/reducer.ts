import { IAcitionType } from '../types'
import { DECREMENT, INCREMENT } from './actionType'

interface ICountState {
  count: number
}
export const countState: ICountState = {
  count: 0
}
export default function countReducer(
  state = countState,
  action: IAcitionType = {}
) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
