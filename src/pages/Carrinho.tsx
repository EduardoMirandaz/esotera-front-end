import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { FormularioFinalizacaoCompra } from "../components/FormularioFinalizacaoCompra";
import { Header } from "../components/Header";
import { Pagamento } from "../components/Pagamento";

export function Carrinho(){
  return(
    <>
        <Header/>
        <FormularioFinalizacaoCompra/>
        <Pagamento/>
        <Accessibility/>
        <Footer/>
    </>
  );
}