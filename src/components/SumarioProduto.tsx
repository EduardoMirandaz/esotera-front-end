import React, { useState, useEffect } from 'react';
import styles from './SumarioProduto.module.css'
import carrinho from '../assets/carrinho.svg'
import checkIcon from '../assets/check.png'
import { produto } from '../data.json'
import { useAuthContext } from '../contexts/auth/AuthContext'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'
import coracaoCheioContraste from '../assets/coracaoCheioContraste.svg'
import coracaoVazioContraste from '../assets/coracaoVazioContraste.svg'
import { ModalPrecisaLogar } from '../components/ModalPrecisaLogar';

export function SumarioProduto(props){
    const [contador, setCount] = useState(1); 

    const { contraste, getCarrinhoList, setQtdItensCarrinho, qtdItensCarrinho } = useAuthContext();
    let temEstoque = produto[props.idProduto].qtdEmEstoque>0;


    function incrementar() {

      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

    const [isClick, setClick] = useState(false);
    
    function decrementar() {
      setCount(function (prevCount) {
        if (prevCount > 1) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 1);
        }
      });
    }

    let inCarrinho = getCarrinhoList().find(
        produto => produto.idProduto == props.idProduto
      ) != undefined;
    
    const textosBtnAddItem = {
      'inCarrinho': "Item no carrinho!",
      'notInCarrinho': "Adicionar ao carrinho"
    };
    const [textoBtnAddItem, setTextoBtnAddItem] = useState(inCarrinho ? textosBtnAddItem.inCarrinho : textosBtnAddItem.notInCarrinho);

    function addItemCarrinho(idProduto, quantidadeProduto){
      const carrinhoList = getCarrinhoList();

      carrinhoList.push({"idProduto": idProduto, "quantidade": quantidadeProduto});

      const carrinhoJSON = JSON.stringify(carrinhoList);
      localStorage.setItem("carrinho", carrinhoJSON);

      setOnClickBtnAddItem(() => () => {});
      setTextoBtnAddItem(textosBtnAddItem.inCarrinho);
      setImgBtnAddItem(checkIcon);

      setQtdItensCarrinho(carrinhoList.length);
    }

    const [showModalPrecisaLogar, setShowModalPrecisaLogar] = useState(false)

    const [onClickBtnAddItem, setOnClickBtnAddItem] = useState(() => {
      if(inCarrinho || !temEstoque ){
        return () => {};
      }
      else if(!localStorage.getItem("username")?.split(" ")[0]){
        return () => {setShowModalPrecisaLogar(prev => !prev)};
      }
      else{
        return addItemCarrinho;
      }
    });

    

    const [imgBtnAddItem, setImgBtnAddItem] = useState(inCarrinho ? checkIcon : carrinho);

    

    return(
        <div className={styles.containerSumario} id={contraste && styles.contraste}>
            <h1 className={styles.titulo}>{produto[props.idProduto].titulo}</h1>
            <div className={styles.subCategorias}>
                {temEstoque &&
                    <p className={styles.estoque} id={contraste && styles.contraste}>Em estoque</p>
                }
                {!temEstoque &&
                    <p className={styles.naoDisponivel} id={contraste && styles.contraste}>Não disponível</p>
                }
                <p className={styles.comprados}>{produto[props.idProduto].qtdComprados} Comprados</p>
                <div className={styles.estrelas}>
                    <div className={styles.stars} id={contraste && styles.contraste} style={{"--rating": produto[props.idProduto].qtdDeEstrelas} as React.CSSProperties} aria-label="Rating of this product is 2.3 out of 5."/>
                    <p className={styles.avaliacao}>{produto[props.idProduto].qtdDeEstrelas}({produto[props.idProduto].qtdAvaliacoes})</p>
                </div>
                <p className={styles.preco}>R${produto[props.idProduto].valor.toFixed(2)}</p>
            </div>
            <p className={styles.texto}>{produto[props.idProduto].descricaoDetalhadaMenor}</p>
            <div className={styles.botoesProduto}>
                <div className={styles.contador} 
                  style={(() => {
                    if(!temEstoque){
                      return {
                        cursor: "not-allowed",
                        opacity: 0.6,
                      };
                    }
                    else if(inCarrinho){
                      return {display: "none"};
                    }
                    else{
                      return {};
                    }
                  })()}>
                    <button className={styles.decrementar} style={(() => {
                      if(!temEstoque){
                        return {
                          cursor: "not-allowed"
                        };
                      }
                      else{
                        return {};
                      }
                    })()} onClick={temEstoque ? decrementar : () => {}} id={contraste && styles.contraste}>−</button>
                    <input type="number" className={styles.quantidade} id={contraste && styles.contraste} value={contador} defaultValue={1} onChange={(e)=>{if(e.target.value != "0" && e.target.value != "")setCount(parseInt(e.target.value))}}/>
                    <button className={styles.incrementar} style={(() => {
                      if(!temEstoque){
                        return {
                          cursor: "not-allowed"
                        };
                      }
                      else{
                        return {};
                      }
                    })()} onClick={temEstoque ? incrementar : () => {}} id={contraste && styles.contraste}>+</button>
                </div> 
                <button 
                  onClick={() => {
                    onClickBtnAddItem(props.idProduto, contador)
                  }} 
                  className={styles.botaoCarrinho} 
                  id={contraste && styles.contraste}
                  style={(() => {
                    if(!temEstoque){
                      return {
                        cursor: "not-allowed",
                        opacity: 0.6,
                      };
                    }
                    else if(inCarrinho){
                      return {cursor: "default"};
                    }
                    else{
                      return {cursor: "pointer"};
                    }
                  })()}
                  >
                    {textoBtnAddItem}
                  <img 
                    src={imgBtnAddItem} 
                    alt={textoBtnAddItem}
                  />
                </button>
                <button className={styles.botaoFavorito} id={contraste && styles.contraste} onClick={() => setClick(!isClick)}>
                  {isClick && contraste &&
                    <img src={coracaoCheioContraste} alt="Remover produto dos favoritos" />
                  }
                  {!isClick && contraste &&
                    <img src={coracaoVazioContraste} alt="Adicionar produto aos favoritos"/>
                  }
                  {isClick && !contraste &&
                    <img src={coracaoCheio} alt="Remover produto dos favoritos" />
                  }
                  {!isClick && !contraste &&
                    <img src={coracaoVazio} alt="Adicionar produto aos favoritos"/>
                  }
                </button>
            </div>
            <ModalPrecisaLogar showModal={showModalPrecisaLogar} setShowModal={setShowModalPrecisaLogar} />
        </div>
        
    )
}