import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Vitrine } from "../components/Vitrine";
import { SumarioProduto } from "../components/SumarioProduto";
import Breadcrumb from "../components/Breadcrumb";
import { DetalhesProduto } from "../components/DetalhesProduto";



export function Produto(){
  return(
    <>
        <Header/>
        <Breadcrumb idProduto={0}/>
        <SumarioProduto/>
        <DetalhesProduto idProduto={0}/>
        <Accessibility/>
        <Footer/>
    </>
  );
}