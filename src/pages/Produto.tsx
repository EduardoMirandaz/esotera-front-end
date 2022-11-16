import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Vitrine } from "../components/Vitrine";

export function Produto(){
  return(
    <>
        <h1>PRODUTO!!</h1>
        <Header/>
        <Accessibility/>
        <Footer/>
    </>
  );
}