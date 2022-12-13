import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import store, { persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import App from './App'
import { Spin } from 'antd'

import './index.css'
import 'uno.css'
import 'normalize.css'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense
        fallback={
          <div className="w-100% h-100% bg-transparent flex-center">
            <Spin size="large" />
          </div>
        }
      >
        <Router>
          <App />
        </Router>
      </Suspense>
    </PersistGate>
  </Provider>
)
