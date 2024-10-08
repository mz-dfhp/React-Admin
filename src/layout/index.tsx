import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { throttle } from 'lodash-es'
import { Layout, Spin, theme } from 'antd'
import { routerStore } from '@/store/router'

import AppHeader from '@/layout/AppHeader'
import AppMain from '@/layout/AppMain'
import AppTabs from '@/layout/AppTabs'
import AppMenu from '@/layout/AppMenu'

const { Sider, Header, Content } = Layout

const defaultContext = {
  refresh: () => ({}),
}
export const AppLayoutContext = createContext<{
  refresh: () => void
}>(defaultContext)

export default function AppLayout() {
  const { token: { colorBgContainer } } = theme.useToken()
  const [refreshing, setRefreshing] = useState(false)
  const { setMenuList } = routerStore()
  const [collapsed, setCollapsed] = useState(false)

  function handleSize() {
    setCollapsed(window.innerWidth < 800)
  }

  const refresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    })
  }, [])

  useEffect(() => {
    setMenuList()
    handleSize()
    window.addEventListener('resize', throttle(handleSize, 500))
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [setMenuList])

  const contextValue = useMemo(() => ({ refresh }), [refresh])

  return (
    <AppLayoutContext.Provider value={contextValue}>
      {
        !refreshing
          ? (
              <Layout className="h-full">
                <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
                  <AppMenu collapsed={collapsed} />
                </Sider>
                <Layout>
                  <Header className="h-auto px-0 leading-none" style={{ background: colorBgContainer }}>
                    <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                    <AppTabs />
                  </Header>
                  <Content className="overflow-y-auto p-[20px]">
                    <AppMain />
                  </Content>
                </Layout>
              </Layout>
            )
          : (
              <Layout className="h-full flex items-center justify-center overflow-hidden">
                <Spin size="large" />
              </Layout>
            )
      }
    </AppLayoutContext.Provider>
  )
}
