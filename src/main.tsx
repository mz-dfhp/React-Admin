import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import store, { persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import App from './App'
import { Spin } from 'antd'

import './index.css'
import 'uno.css'
import 'normalize.css'
import 'antd/dist/reset.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense
        fallback={
          <div className="w-100% h-100% bg-transparent flex-center">
            <Spin size="large" />
          </div>
        }
      >
        {import.meta.env.MODE === 'github-io' ? (
          <HashRouter>
            <App />
          </HashRouter>
        ) : (
          <BrowserRouter>
            <App />
          </BrowserRouter>
        )}
      </Suspense>
    </PersistGate>
  </Provider>
)
