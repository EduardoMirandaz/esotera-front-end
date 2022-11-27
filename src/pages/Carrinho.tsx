import React from "react";
import styles from "./Carrinho.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { FormularioFinalizacaoCompra } from "../components/FormularioFinalizacaoCompra";
import { Header } from "../components/Header";
import { Pagamento } from "../components/Pagamento";
import { CardCompra } from "../components/CardCompra"

export function Carrinho(props) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.right}>
          <h1 className={styles.titulo}>Finalizar compra</h1>
          <FormularioFinalizacaoCompra />
          <Pagamento />
        </div>
        <div className={styles.left}>
          <h2 className={styles.titulo}>Itens do Carrinho</h2>
          <div className={styles.boxCardsCompras}>
            {props.produto.map((card) => {
              if (card.idProduto == 0) {
                return (
                  <CardCompra
                    descricao={card.descricao}
                    imagemPrincipal={card.imagemPrincipal}
                    valor={card.valor}
                    idProduto={card.idProduto}
                  />
                )
              }
            })
            }
          </div>
        </div>
      </div>
      <Accessibility />
      <Footer />
    </>
  );
}