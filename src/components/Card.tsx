import React, { useState } from "react";
import styles from './Card.module.css'
import semImagem from '../assets/semImagem.svg'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'

interface Card {
  imagem?: string;
  categoria?: string;
  descricao: string;
  valor:number;
}

export function Card(props:Card){
    const [isClick, setClick] = useState(false);
    return(
      <div className={styles.fundo}>
        {props.imagem &&
            <img className={styles.imagem} src={props.imagem}/>
        }
        {!props.imagem &&
            <img className={styles.imagem} src={semImagem}/>
        }
        {props.categoria &&
            <p className={styles.categoria}>{props.categoria}</p>
        }
        {!props.categoria &&
            <p className={styles.categoria}>Outros</p>
        }
        <h1 className={styles.descricao}>{props.descricao}</h1>
        <h2 className={styles.valor}>R${props.valor.toFixed(2)}</h2>
        <div className={styles.funcoes}>
          <a href="" className={styles.button}>VER DETALHES</a>
          {isClick &&
            <img src={coracaoCheio} isClick={isClick} onClick={() => setClick(!isClick)}/>
          }
          {!isClick &&
            <img src={coracaoVazio} isClick={isClick} onClick={() => setClick(!isClick)}/>
          }
        </div>

      </div>
    )
}