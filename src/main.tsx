import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { Spin } from 'antd'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.tsx'

import 'virtual:uno.css'
import './index.css'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense
    fallback={(
      <div className="h-100% w-100% flex-center bg-transparent">
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
