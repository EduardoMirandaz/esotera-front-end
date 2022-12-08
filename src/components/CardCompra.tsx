import React, { useState } from "react";
import styles from './CardCompra.module.css'
import semImagem from '../assets/semImagem.svg'
import { useAuthContext } from '../contexts/auth/AuthContext';

interface CardCompra {
  imagemPrincipal?: string;
  titulo: string;
  valor:number;
  idProduto: number;
  quantidadeProduto: number;
  atualizarQuantidade: (idProduto: number, quantidadeProduto: number) => void;
}




export function CardCompra(props:CardCompra){
    const [contador, setCount] = useState(props.quantidadeProduto); 
    // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    
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

    return(
      <div id={contraste && styles.contraste}>
      <div className={styles.fundo} >
        <div className={styles.boxImage}>
          {props.imagemPrincipal &&
              <img className={styles.imagem} src={props.imagemPrincipal}/>
          }
          {!props.imagemPrincipal &&
              <img className={styles.imagem} src={semImagem}/>
          }
        </div>
        <div className={styles.informacoes}>
          <h1 className={styles.titulo}>{props.titulo}</h1>
          <h2 className={styles.valor}>R${props.valor.toFixed(2)}</h2>
          <div className={styles.contador}>
            <button className={styles.decrementar} onClick={decrementar}>−</button>
            <h1>{contador}</h1>
            <button className={styles.incrementar} onClick={incrementar}>+</button>
          </div>
        </div>
        
      </div> 
      </div>
    )
}

export default CardCompra