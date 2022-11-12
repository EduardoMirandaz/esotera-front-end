import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Carrinho(){
  return(
    <>
        <h1>Carrinho!!</h1>
        <Header/>
        <Accessibility/>
        <Footer/>
    </>
  );
}