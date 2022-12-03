import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Vitrine } from "../components/Vitrine";
import { SumarioProduto } from "../components/SumarioProduto";
import ImagensProdutos from "../components/ImagensProdutos"
import fotoProduto from "../assets/fotoProduto.png"
import styles from './Produto.module.css'


export function Produto(){
  return(
    <>
      <Header/>
      <div className={styles.container}>
        <div className={styles.left}>
          <ImagensProdutos idProduto={0}/>
        </div>
        <div className={styles.right}>
          <SumarioProduto/>
        </div>
      </div>
      <Accessibility/>
      <Footer/>
    </>
  );
}