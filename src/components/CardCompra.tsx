import React, { useState } from "react";
import styles from './CardCompra.module.css'
import semImagem from '../assets/semImagem.svg'

interface CardCompra {
  imagemPrincipal?: string;
  descricao: string;
  valor:number;
  idProduto: number;
}




export function CardCompra(props:CardCompra){
    //const [isClick, setClick] = useState(false);
    const [contador, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    
    function incrementar() {
      //setCount(prevCount => prevCount+=s1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
    
    function decrementar() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }

    return(
      <div className={styles.fundo}>
        {props.imagemPrincipal &&
            <img className={styles.imagem} src={props.imagemPrincipal}/>
        }
        {!props.imagemPrincipal &&
            <img className={styles.imagem} src={semImagem}/>
        }
        <h1 className={styles.descricao}>{props.descricao}</h1>
        <h2 className={styles.valor}>R${props.valor.toFixed(2)}</h2>
        <div className={styles.contador}>
          <button className={styles.decrementar} onClick={decrementar}>-</button>
          <h1>{contador}</h1>
          <button className={styles.incrementar} onClick={incrementar}>+</button>
        </div>
      </div>
    )
}

export default CardCompra