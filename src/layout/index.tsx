import { createContext, useEffect, useMemo, useState } from 'react'
import { throttle } from 'lodash-es'
import { Layout, Spin } from 'antd'
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

function AppLayout() {
  const [refreshing, setRefreshing] = useState(false)
  const { setMenuList } = routerStore()
  const [collapsed, setCollapsed] = useState(false)
  const collapsedMemo = useMemo(() => collapsed, [collapsed])
  function handleSize() {
    setCollapsed(window.innerWidth < 800)
  }

  function refresh() {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    })
  }
  useEffect(() => {
    setMenuList()
    handleSize()
    window.addEventListener('resize', throttle(handleSize, 500))
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <AppLayoutContext.Provider value={{ refresh }}>
      {
        !refreshing
          ? (
            <Layout className="h-[100vh]">
              <Sider trigger={null} theme="dark" collapsible collapsed={collapsedMemo}>
                <AppMenu collapsed={collapsedMemo} />
              </Sider>
              <Layout>
                <Header className="h-auto bg-white px-0 leading-none">
                  <AppHeader collapsed={collapsedMemo} setCollapsed={setCollapsed} />
                  <AppTabs />
                </Header>
                <Content className="overflow-y-auto p-[20px]">
                  <AppMain />
                </Content>
              </Layout>
            </Layout>
            )
          : (
            <div className="h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden bg-transparent">
              <Spin size="large" />
            </div>
            )
      }

    </AppLayoutContext.Provider>
  )
}
export default AppLayout
