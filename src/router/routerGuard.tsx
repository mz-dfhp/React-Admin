import React, { useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { cloneDeep } from 'lodash-es'

import { basicsRoutes, errorRoutes, asyncRoutes, beforeEach } from './index'
import { diffRouterList, transRoutes, transMenu } from '@/utils/route'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setUserInfo } from '@/store/user/actions'
import { setMenu } from '@/store/menu/actions'
import { setRoutes } from '@/store/router/actions'

const RouterGuard: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const userStore = useAppSelector((state) => state.userStore)
  const { routerList, routerObj } = useAppSelector((state) => state.routerStore)
  const dispath = useAppDispatch()
  const element = useRoutes(routerList)

  useEffect(() => {
    const token = userStore.token
    if (location.pathname === '/') return navigate('/index')
    if (token) {
      if (location.pathname === '/login') {
        navigate('/', { replace: true })
      }
      if (userStore.userInfo.permission.length === 0) {
        dispath(setUserInfo)
      }
    } else {
      navigate('/login', { replace: true })
    }
  }, [location.pathname])

  useEffect(() => {
    if (userStore.userInfo.permission.length > 0) {
      const transAsyncRoutes = transRoutes(asyncRoutes)
      const resultRoutes = diffRouterList(
        cloneDeep(transAsyncRoutes),
        userStore.userInfo.permission
      )
      const menuList = transMenu(cloneDeep(userStore.userInfo.permission))
      dispath(setMenu(menuList))
      dispath(setRoutes([...basicsRoutes, ...errorRoutes, ...resultRoutes]))
    } else {
      dispath(setRoutes([...basicsRoutes]))
    }
  }, [userStore.userInfo.permission])

  setTimeout(() => {
    beforeEach(routerObj[location.pathname], navigate)
  })

  return element
}

export default RouterGuard
