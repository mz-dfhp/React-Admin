import { useRoutes } from 'react-router-dom'
import router from '@/router'
import Permissions from '@/router/permissions'
function App() {
  return <Permissions app={<>{useRoutes(router)}</>} />
}
export default App
