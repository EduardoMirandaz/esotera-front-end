import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
<<<<<<< HEAD
import { Header } from "./components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Accessibility } from "./components/Accessibility";
import { Footer } from "./components/Footer";
=======
import {carrosseis,cards} from "./data.json"
import { Principal } from './pages/Principal';
>>>>>>> 4aaadb67b16a866cf80b648b1ee13dd516b62961


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Header/>
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                    <img src={Carrossel1} />
                </div>
                <div>
                    <img src={Carrossel2} />
                </div>
                <div>
                    <img src={Carrossel3} />
                </div>
                <div>
                    <img src={Carrossel4} />
                </div>
            </Carousel>
    
    <>
    <Vitrine data={cards}/>
    </>
    <Accessibility/>
    <Footer/>
=======
    <Principal carrosseis={carrosseis} cards={cards}/>
>>>>>>> 4aaadb67b16a866cf80b648b1ee13dd516b62961
  </React.StrictMode>
)
