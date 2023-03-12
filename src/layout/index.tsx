import React, { useState, useMemo, useCallback, memo } from 'react'

import { Layout } from 'antd'
import AppMenu from './AppMenu'
import AppHeader from './AppHeader'
import AppMain from './AppMain'
import AppTabs from './AppTabs'
import AppSetting from './AppSetting'

const { Sider, Header, Content } = Layout
const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const collapsedCallback = useCallback(
    (e: boolean | ((prevState: boolean) => boolean)) => {
      setCollapsed(e)
    },
    [collapsed]
  )
  const collapsedMemo = useMemo(() => collapsed, [collapsed])
  return (
    <Layout className="h-100vh">
      <Sider trigger={null} theme="dark" collapsible collapsed={collapsedMemo}>
        <AppMenu collapsed={collapsedMemo} />
      </Sider>
      <Layout>
        <Header className="!bg-white !px-20px">
          <AppHeader
            collapsed={collapsedMemo}
            setCollapsed={collapsedCallback}
          />
        </Header>
        <AppTabs />
        <Content className="overflow-y-auto p-20px">
          <AppMain />
        </Content>
      </Layout>
      <AppSetting />
    </Layout>
  )
}
export default memo(AppLayout)
