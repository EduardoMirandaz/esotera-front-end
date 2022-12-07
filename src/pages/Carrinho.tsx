import React, {useState} from 'react';
import styles from "./Carrinho.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { FormularioFinalizacaoCompra } from "../components/FormularioFinalizacaoCompra";
import { Header } from "../components/Header";
import { Pagamento } from "../components/Pagamento";
import { CardCompra } from "../components/CardCompra"
import trianguloLogo from "../assets/trianguloLogoRoxo.svg"
import ModalPagamentoPix from '../components/ModalPagamentoPix';
import cartao from "../assets/cartao.svg"
import {BreadcrumbProduto} from '../components/BreadcrumbProduto'

export function Carrinho(props) {
  const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
  return (
    <>
      <Header />
      <BreadcrumbProduto pagina='Carrinho'/>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.titulo}>Finalizar compra</h1>
          <FormularioFinalizacaoCompra />
          <h1 className={styles.pagamentoLabel}>Decida sua forma de pagamento</h1>
          <Pagamento/>
          <div className={styles.compreEGanhe}>
            <div className={styles.compreEGanheTexto}>
              <h1 className={styles.titulo}>Compre e ganhe</h1>
              <p>Ao finalizar essa compra você recebe 161 Pontos Esotera para usar em suas próximas compras :)</p>
            </div>
            <img className={styles.esoteraCoins} src={trianguloLogo} alt="Logo Esotera Coins" />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.titulo}>Itens do Carrinho</h2>
          <div className={styles.boxCardsCompras}>
            {props.produto.map((card) => {
              if (card.idProduto <= 1) {
                return (
                  <CardCompra
                    titulo={card.titulo}
                    imagemPrincipal={card.imagemPrincipal}
                    valor={card.valor}
                    idProduto={card.idProduto}
                  />
                )
              }
            })
            }
            <div className={styles.buttonsCards}>
              <a href="" className={styles.buttonContinue}>
                Continuar comprando
              </a>
              <a href="" className={styles.buttonRemove}>
                Remover itens
              </a>
            </div>
          </div>
          <div className={styles.totalCompra}>
            <h3 className={styles.totalCompraLabel} >Total da compra</h3>
            <div className={styles.valorItensBox}>
              <h4 className={styles.valorItensLabel}>valor dos itens</h4>
              <h3 className={styles.valorItens}>R$ 57,40</h3>
            </div>
            <div className={styles.valorFreteBox}>
              <h4 className={styles.valorFreteLabel}>valor do frete</h4>
              <h3 className={styles.valorFrete}>R$ 24,30</h3>
            </div>
            <div className={styles.valorTotalBox}>
              <h4 className={styles.valorTotalLabel}>valor total</h4>
              <h3 className={styles.valorTotal}>R$ 81,70</h3>
            </div>
          </div>
          <a href="#" onClick={openModal} className={styles.button}>
            Finalizar a compra
            <img className={styles.cartao} src={cartao} />
          </a>
        </div>
      </div>
      <ModalPagamentoPix showModal={showModal} setShowModal={setShowModal} />
      <Accessibility />
      <Footer />
    </>
  );
}