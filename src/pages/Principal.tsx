import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Vitrine } from "../components/Vitrine";
import React, {useState, useEffect} from 'react';
import styles from './Principal.module.css'
import { useAuthContext } from "../contexts/auth/AuthContext";

export function Principal(props){
  let cards = props.produto 
  const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }

      useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.scrollTo(0, 0);
      })

  const { filtro } = useAuthContext();

  if(filtro){
    if(filtro == "promocao"){
      cards = cards.filter((card) => card.isPromocao)
    }
    else{
      cards = cards.filter((card) => card.categoria == filtro)
    }
  }
  console.log(cards) 
  
    return(
      <>
        <Header isPrincipal={true}/>
        {props.carrosseis &&
          <div className={styles.carrossel}>
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
              {props.carrosseis.map((carrossel) => {
                return(
                    <div>
                      <img src={carrossel.imagem} />
                    </div>
                )
              })}
            </Carousel>
          </div>
        }
        
        <Vitrine data={cards}/>
        <Accessibility/>
        <Footer/>
      </>
    )
}