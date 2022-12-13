import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash-es'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setUserInfo } from '@/store/user/actions'
import { basicsRoutes, errorRoutes, asyncRoutes, IRoute } from './index'
import { diffRouterList, formatRouteToMenu } from '@/utils/route'
import { setMenu } from '@/store/menu/actions'
const Permissions: React.FC = () => {
  const [addRoutes, setAddRoutes] = useState([...basicsRoutes])

  const location = useLocation()
  const navigate = useNavigate()

  const userStore = useAppSelector((state) => state.userStore)
  const dispath = useAppDispatch()

  const element = useRoutes(addRoutes)

  useEffect(() => {
    const token = userStore.token
    if (location.pathname === '/') navigate('/index')
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
      const result = [...basicsRoutes, ...asyncRoutes, ...errorRoutes]
      setAddRoutes(result)
    }
  }, [userStore.userInfo.permission])
  return element
}

export default Permissions
