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

export function Carrinho(props) {
  const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.titulo}>Finalizar compra</h1>
          <FormularioFinalizacaoCompra />
          <Pagamento openModal={openModal}/>
          <div className={styles.compreEGanhe}>
            <div className={styles.compreEGanheTexto}>
              <h1 className={styles.titulo}>Compre e ganhe</h1>
              <p>Ao finalizar essa compra você recebe 161 esoteracoins para usar em suas próximas compras :)</p>
            </div>
            <img className={styles.esoteraCoins} src={trianguloLogo} alt="Logo Esotera Coins" />
          </div>
        </div>
        <div className={styles.right}>
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
      <ModalPagamentoPix showModal={showModal} setShowModal={setShowModal} />
      <Accessibility />
      <Footer />
    </>
  );
}