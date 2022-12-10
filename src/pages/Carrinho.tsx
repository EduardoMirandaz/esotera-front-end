import React, {useState} from 'react';
import styles from "./Carrinho.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accessibility } from "../components/Accessibility";
import { Footer } from "../components/Footer";
import { FormularioFinalizacaoCompra } from "../components/FormularioFinalizacaoCompra";
import { Header } from "../components/Header";
import { Pagamento } from "../components/Pagamento";
import { CardCompra } from "../components/CardCompra"
import trianguloLogoRoxo from "../assets/trianguloLogoRoxo.svg"
import trianguloLogoBranco from "../assets/trianguloLogoBranco.svg"
import ModalPagamentoPix from '../components/ModalPagamentoPix';
import cartao from "../assets/cartao.svg"
import {BreadcrumbProduto} from '../components/BreadcrumbProduto'
import { useAuthContext } from '../contexts/auth/AuthContext';
import { ModalCompraRealizada } from '../components/ModalCompraRealizada';
import { Link } from 'react-router-dom';

export function Carrinho(props) {
  const { contraste, getCarrinhoList, canFinalizar } = useAuthContext();

  const [showModalPix, setShowModalPix] = useState(false)
  const closeModal = () => {
    setShowModalPix(false);
    openModalCompraRealizada();
  }

  const openModalDePagamento = () => {
    const inputPix = document.getElementById("pix") as HTMLInputElement; 
    if(inputPix.checked){
      setShowModalPix(prev => !prev);
      setTimeout(closeModal, 20000);
    }
  }

  const [showModalCompraRealizada, setShowModalCompraRealizada] = useState(false)

  const openModalCompraRealizada = () => {
      setShowModalCompraRealizada(prev => !prev)
  }


  const [carrinhoList, setCarrinhoList] = useState(getCarrinhoList())

  const atualizarQuantidadeCard = (idProduto, quantidadeProduto) => {
    let carrinhoListTmp = carrinhoList;
    for(let i = 0; i < carrinhoListTmp.length; i++){
      if(carrinhoListTmp[i].idProduto == idProduto){
        if(quantidadeProduto == 0){
          carrinhoListTmp.splice(i, 1);
        }
        else{
          carrinhoListTmp[i].quantidade = quantidadeProduto;
        }
        break;
      }
    }

    setCarrinhoList(carrinhoListTmp);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoListTmp));
    setValorItens(calcularValorItens());
  }

  const valorFrete = getCarrinhoList().length != 0 ? 24.30 : 0.00;

  const [valorItens, setValorItens] = useState(calcularValorItens())

  function calcularValorItens(){
    const carrinhoListTmp = getCarrinhoList();
    const soma = carrinhoListTmp.reduce(
      (acc, currProduto) => {
        return acc + currProduto.quantidade * props.produto.find(
          produto => produto.idProduto == currProduto.idProduto
          ).valor
        }, 0
    );

    return soma;
  }

  return (
    <>
      <Header isPrincipal={false}/>
      <div className={contraste && styles.background}>
      <BreadcrumbProduto pagina='Carrinho'/>
      <div className={styles.container} id={contraste && styles.contraste}>
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
            {!contraste && 
              <img className={styles.esoteraCoins} src={trianguloLogoRoxo} alt="Logo Esotera Coins" />
            } 
            {contraste && 
              <img className={styles.esoteraCoins} src={trianguloLogoBranco} alt="Logo Esotera Coins" />
            }

          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.titulo}>Itens do Carrinho</h2>
          <div className={styles.boxCardsCompras}>
            <div className={styles.scroll}>

              {props.produto.filter(card => {
                return carrinhoList.find(produto => card.idProduto == produto.idProduto) != undefined
              }).map((card) => {
                return (
                  <CardCompra
                    titulo={card.titulo}
                    imagemPrincipal={card.imagemPrincipal}
                    valor={card.valor}
                    idProduto={card.idProduto}
                    quantidadeProduto={carrinhoList.find(produto => card.idProduto == produto.idProduto).quantidade}
                    atualizarQuantidade={atualizarQuantidadeCard}
                    descricaoImg={card.descricaoImg}
                  />
                )
              })
              }
            </div>
            <div className={styles.buttonsCards}>
              <div onClick={() => {localStorage.setItem("carrinho", "[]"); setCarrinhoList([]); setValorItens(calcularValorItens());}} className={ getCarrinhoList().length != 0 ? styles.buttonRemove : styles.buttonRemoveApagado }>
                  Limpar carrinho
              </div>
              <Link to={"/"} className={styles.buttonContinue}>
                Continuar comprando
              </Link>
            </div>
          </div>
          <div className={styles.totalCompra}>
            <h3 className={styles.totalCompraLabel}>Total da compra</h3>
            <div className={styles.valorItensBox}>
              <h4 className={styles.valorItensLabel}>valor dos itens</h4>
              <h3 className={styles.valorItens}>R$ {valorItens.toFixed(2)}</h3>
            </div>
            <div className={styles.valorFreteBox}>
              <h4 className={styles.valorFreteLabel}>valor do frete</h4>
              <h3 className={styles.valorFrete}>R$ {valorFrete.toFixed(2)}</h3>
            </div>
            <div className={styles.valorTotalBox}>
              <h4 className={styles.valorTotalLabel}>valor total</h4>
              <h3 className={styles.valorTotal}>R$ {(valorItens+valorFrete).toFixed(2)}</h3>
            </div>
          </div>
          <a href={ getCarrinhoList().length != 0 && canFinalizar ? "#" : "#!"} onClick={ () => { if(getCarrinhoList().length != 0 && canFinalizar) openModalDePagamento() } } className={ getCarrinhoList().length != 0 && canFinalizar ? styles.button : styles.buttonApagado}>
            Finalizar a compra
            <img className={styles.cartao} src={cartao} />
          </a>
        </div>
      </div>
      </div>
      <ModalPagamentoPix showModal={showModalPix} setShowModal={setShowModalPix} />
      <ModalCompraRealizada showModal={showModalCompraRealizada} setShowModal={setShowModalCompraRealizada} />
      <Accessibility />
      <Footer />
    </>
  );
}