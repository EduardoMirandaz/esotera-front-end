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

  const { filtro, contraste, busca } = useAuthContext();
  if(busca){
    cards = cards.filter((card) => (card.titulo.toUpperCase().indexOf(busca.toUpperCase()) != -1))
  }
  if(filtro){
    if(filtro == "Promoções"){
      cards = cards.filter((card) => card.isPromocao)
    }
    else{
      cards = cards.filter((card) => card.categoria == filtro)
    }
  }
  
    return(
      <>
        <Header isPrincipal={true}/>
        
          {props.carrosseis &&
            <div className={styles.carrossel} id={contraste && styles.contraste}>
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
        {
          filtro &&
          <h1 className={styles.filtro} id={contraste && styles.contraste}>{filtro}</h1>
        }
        {
          !filtro &&
          <h1 className={styles.filtro} id={contraste && styles.contraste}>Página Inicial</h1>
}
        <Vitrine data={cards}/>
        <Accessibility/>
        <Footer/>
      </>
    )
}