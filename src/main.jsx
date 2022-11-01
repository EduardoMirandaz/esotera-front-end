import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import { Header } from "./components/Header"
import { Carrossel } from "./components/Carrossel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card } from './components/Card';
import { Footer } from "./components/Footer";



import {cards} from "./data.json"
import { Vitrine } from './components/Vitrine';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Carrossel />
    <>
    <Vitrine data={cards}/>
    </>
    <Footer/>
  </React.StrictMode>
)
