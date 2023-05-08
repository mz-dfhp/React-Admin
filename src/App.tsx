import Permissions from '@/router/permissions'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1677ff',
          fontSize: 15
        }
      }}
    >
      <Permissions />
    </ConfigProvider>
  )
}
export default App
