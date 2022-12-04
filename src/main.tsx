import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Spin } from 'antd'
import App from './App'

import './index.css'
import 'uno.css'
import 'normalize.css'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense
    fallback={
      <div className="w-100% h-100% flex-center">
        <Spin size="large" />
      </div>
    }
  >
    <Router>
      <App />
    </Router>
  </Suspense>
)
