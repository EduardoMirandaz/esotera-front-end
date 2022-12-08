import React, { useState } from "react";
import styles from './CardCompra.module.css'
import semImagem from '../assets/semImagem.svg'
import { useAuthContext } from '../contexts/auth/AuthContext';

interface CardCompra {
  imagemPrincipal?: string;
  titulo: string;
  valor:number;
  idProduto: number;
}




export function CardCompra(props:CardCompra){
    const [contador, setCount] = useState(1); 
    // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    
    const { contraste } = useAuthContext();

    function incrementar() {
      //setCount(prevCount => prevCount+=s1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
    
    function decrementar() {
      setCount(function (prevCount) {
        if (prevCount > 1) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 1);
        }
      });
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