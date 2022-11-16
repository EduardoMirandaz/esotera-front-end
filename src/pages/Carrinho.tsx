import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pagamento } from "../components/Pagamento";

export function Carrinho(){
  return(
    <>
        <Header/>
        <Pagamento/>
        <Accessibility/>
        <Footer/>
    </>
  );
}