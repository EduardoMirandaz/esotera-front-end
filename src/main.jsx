import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import {carrosseis,cards} from "./data.json"
import { Principal } from './pages/Principal';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal carrosseis={carrosseis} cards={cards} filtro={"Cristais"}/>
  </React.StrictMode>
)