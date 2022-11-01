import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Vitrine } from "../components/Vitrine";

export function Principal(props){
    return(
      <>
        <Header/>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          {props.carrosseis.map((carrossel) => {
            return(
                <div>
                  <img src={carrossel.imagem} />
                </div>
            )
          })}
        </Carousel>
        <Vitrine data={props.cards}/>
        <Accessibility/>
        <Footer/>
      </>
    )
}