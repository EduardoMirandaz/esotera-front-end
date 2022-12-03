import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SumarioProduto } from "../components/SumarioProduto";
import Breadcrumb from "../components/Breadcrumb";
import { DetalhesProduto } from "../components/DetalhesProduto";


import ImagensProdutos from "../components/ImagensProdutos"
import styles from './Produto.module.css'


export function Produto(){
  return(
    <>
      <Header/>
      <Breadcrumb idProduto={0}/>
      <div className={styles.container}>
        <div className={styles.left}>
          <ImagensProdutos idProduto={0}/>
        </div>
        <div className={styles.right}>
          <SumarioProduto/>
        </div>
      </div>
      <DetalhesProduto idProduto={0}/>
      <Accessibility/>
      <Footer/>
    </>
  );
}