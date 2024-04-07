import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store , persistor } from './api/Store.jsx'
import { analytics } from './firebase.config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} 
// @ts-ignore
  app={analytics}>
  <PersistGate loading="loading" persistor={persistor}>
  <App />
  </PersistGate>
  </Provider>
  </React.StrictMode>,
)
