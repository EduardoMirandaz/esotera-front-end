import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SumarioProduto } from "../components/SumarioProduto";
import { BreadcrumbProduto } from "../components/BreadcrumbProduto";
import { DetalhesProduto } from "../components/DetalhesProduto";
import { ConfiraTambemProduto } from "../components/ConfiraTambemProduto";

import ImagensProdutos from "../components/ImagensProdutos"
import styles from './Produto.module.css'
import { Card } from "../components/Card";
import { produto } from "../data.json"


export function Produto(){
  return(
    <>
      <Header/>
      <div className={styles.containerBreadcrumb}>
        <BreadcrumbProduto idProduto={0}/>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <ImagensProdutos idProduto={0}/>
        </div>
        <div className={styles.right}>
          <SumarioProduto idProduto={0}/>
        </div>
      </div>
      <DetalhesProduto idProduto={0}/>
      <div className={styles.containerConfiraTambemProduto}>
        <ConfiraTambemProduto produto={produto}/>
      </div>
      <Accessibility/>
      <Footer/>
    </>
  );
}