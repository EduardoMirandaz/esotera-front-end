import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import { Header } from "./components/Header"
import { Content } from "./components/Content"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './components/Card';


import Carrossel1 from './assets/Carrossel1.png'
import Carrossel2 from './assets/Carrossel2.png'
import Carrossel3 from './assets/Carrossel3.png'
import Carrossel4 from './assets/Carrossel4.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
    <Content/>
    <>
    <Card/>
    </>
  </React.StrictMode>
)
