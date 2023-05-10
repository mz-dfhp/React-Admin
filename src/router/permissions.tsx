import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { cloneDeep } from 'lodash-es'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setUserInfo } from '@/store/user/actions'
import { basicsRoutes, errorRoutes, asyncRoutes, IRoute } from './index'
import { diffRouterList, formatRouteToMenu } from '@/utils/route'
import { setMenu } from '@/store/menu/actions'
import { setRoutes } from '@/store/router/actions'

const Permissions: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const userStore = useAppSelector((state) => state.userStore)
  const routerStore = useAppSelector((state) => state.routerStore)
  const dispath = useAppDispatch()

  const element = useRoutes(routerStore.routerList)

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
      const resultRoutes = diffRouterList(
        asyncRoutes[0]?.children as IRoute[],
        userStore.userInfo.permission
      )
      const menuList = formatRouteToMenu(cloneDeep(resultRoutes))
      dispath(setMenu(menuList))
      asyncRoutes[0].children = resultRoutes
      dispath(setRoutes([...basicsRoutes, ...asyncRoutes, ...errorRoutes]))
    }
  }, [userStore.userInfo.permission])
  return element
}

export default Permissions
