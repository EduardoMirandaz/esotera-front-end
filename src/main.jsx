import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import { Header } from "./components/Header"
import { Content } from "./components/Content"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Content/>
  </React.StrictMode>
)
