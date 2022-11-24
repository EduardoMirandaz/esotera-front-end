import React from "react";
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
      <FormularioFinalizacaoCompra />
      <Pagamento />
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
      <Accessibility />
      <Footer />
    </>
  );
}