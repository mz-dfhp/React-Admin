import React from 'react'
import { useRoutes } from 'react-router-dom'
// 路由守卫

// 如何实现 vueRoute 导航守卫
// 1. beforeEach
// 2. afterEach
// 3. 权限判断
const RouterGuard: React.FC<{
  beforeEach: () => void
  afterEach: () => void
  routes: []
}> = () => {
  return useRoutes([])
}

export default RouterGuard
