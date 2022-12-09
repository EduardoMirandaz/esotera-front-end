import React, { useState } from "react";
import styles from './CardCompra.module.css'
import semImagem from '../assets/semImagem.svg'
import { useAuthContext } from '../contexts/auth/AuthContext';
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

interface CardCompra {
  imagemPrincipal?: string;
  titulo: string;
  valor:number;
  idProduto: number;
  quantidadeProduto: number;
  descricaoImg: string;
  atualizarQuantidade: (idProduto: number, quantidadeProduto: number) => void;
}




export function CardCompra(props:CardCompra){
    const [contador, setCount] = useState(props.quantidadeProduto); 
    
    const { contraste } = useAuthContext();

    function incrementar() {
      const novoCount = contador+1;
      setCount(novoCount);
      props.atualizarQuantidade(props.idProduto, novoCount);
    }
    
    function decrementar() {
      const novoCount = contador > 1 ? contador - 1 : 1;
      setCount(novoCount);
      props.atualizarQuantidade(props.idProduto, novoCount);
    }
    
    const newUrl = "/produto/"+props.idProduto

    return(
      <div id={contraste && styles.contraste}>
        <IconContext.Provider value={{ color: contraste ? "white" : "#11002B", size: "1.5em"}}>
          <div className={styles.fundo} >
          <Link reloadDocument to={newUrl}>
            <div className={styles.boxImage}>
              {props.imagemPrincipal &&
                  <img alt={props.descricaoImg ? props.descricaoImg : "Descrição indisponível para a imagem"} className={styles.imagem} src={props.imagemPrincipal} id={contraste && styles.contraste}/>
                }
              {!props.imagemPrincipal &&
                  <img alt="Produto sem imagem disponível" className={styles.imagem} src={semImagem} id={contraste && styles.contraste}/>
                }
            </div>
          </Link>
            <div id={contraste && styles.contraste} className={styles.excluir} onClick={() => {props.atualizarQuantidade(props.idProduto, 0)}}>
              <IoClose/>
            </div>
            <div className={styles.informacoes}>
              <h1 className={styles.titulo}>{props.titulo}</h1>
              <h2 className={styles.valor}>R${props.valor.toFixed(2)}</h2>
              <div className={styles.contador}>
                <button className={styles.decrementar} onClick={decrementar} aria-label="Diminuir quantidade de produtos selecionados">−</button>
                <h1>{contador}</h1>
                <button className={styles.incrementar} onClick={incrementar} aria-label="Aumentar quantidade de produtos selecionados">+</button>
              </div>
            </div>
            
          </div> 
        </IconContext.Provider>
      </div>
    )
}

export default CardCompra