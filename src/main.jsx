import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App'
import AuthProvider from './contexts/auth/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <App/>
    </AuthProvider>
  </React.StrictMode>
)