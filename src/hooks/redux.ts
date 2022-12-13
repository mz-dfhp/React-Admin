import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppDispatch: () => any = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
