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
import { produto } from "../data.json"
import { useAuthContext } from "../contexts/auth/AuthContext";
import { useParams } from "react-router-dom";


export function Produto(){
  const { contraste } = useAuthContext();
  let {id} = useParams();
  return(
    <>
      <Header isPrincipal={false}/>
      <div className={styles.containerBreadcrumb} id={contraste && styles.contraste}>
        <BreadcrumbProduto pagina='produto'/>
      </div>
      <div className={styles.container} id={contraste && styles.contraste}>
        <div className={styles.left}>
          <ImagensProdutos idProduto={id}/>
        </div>
        <div className={styles.right}>
          <SumarioProduto idProduto={id}/>
        </div>
      </div>
      <DetalhesProduto idProduto={id}/>
      <div className={styles.containerConfiraTambemProduto} id={contraste && styles.contraste}>
        <ConfiraTambemProduto produto={produto}/>
      </div>
      <Accessibility/>
      <Footer/>
    </>
  );
}