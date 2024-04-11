import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { Spin } from 'antd'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense
    fallback={(
      <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-transparent">
        <Spin size="large" />
      </div>
    )}
  >
    {import.meta.env.MODE === 'github-io'
      ? (
        <HashRouter>
          <App />
        </HashRouter>
        )
      : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
        )}
  </Suspense>,
)
