import { useState, useMemo, useCallback, memo } from 'react'

import { Layout } from 'antd'
import AppSider from './AppSider'
import AppHeader from './AppHeader'
import AppContent from './AppContent'

const AppLayout = () => {
  console.log('AppLayoutAppLayoutAppLayoutAppLayout')
  const [collapsed, setCollapsed] = useState(false)
  const collapsedCallback = useCallback(
    (e: boolean | ((prevState: boolean) => boolean)) => {
      setCollapsed(e)
    },
    [collapsed]
  )
  const collapsedMemo = useMemo(() => collapsed, [collapsed])
  return (
    <Layout className="app-layout ">
      <AppSider collapsed={collapsedMemo} />
      <Layout className="app-layout h-100vh ">
        <AppHeader collapsed={collapsedMemo} setCollapsed={collapsedCallback} />
        <AppContent />
      </Layout>
    </Layout>
  )
}
export default memo(AppLayout)
