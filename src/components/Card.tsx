import React, { useState } from "react";
import styles from './Card.module.css'
import semImagem from '../assets/semImagem.svg'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'
import { useAuthContext } from "../contexts/auth/AuthContext";

interface Card {
  imagemPrincipal?: string;
  categoria?: string;
  titulo: string;
  valor:number;
}

export function Card(props:Card){
    const [isClick, setClick] = useState(false);
    const { contraste } = useAuthContext();
    return(
      <div className={styles.fundo} id={contraste && styles.contraste}>
        {props.imagemPrincipal &&
            <img className={styles.imagem} src={props.imagemPrincipal} alt="Imagem do Produto"/>
        }
        {!props.imagemPrincipal &&
            <img className={styles.imagem} src={semImagem} alt="Imagem do Produto"/>
        }
        {props.categoria &&
            <p className={styles.categoria} id={contraste && styles.contraste}>{props.categoria}</p>
        }
        {!props.categoria &&
            <p className={styles.categoria} id={contraste && styles.contraste}>Outros</p>
        }
        <h1 className={styles.titulo}>{props.titulo}</h1>
        <h2 className={styles.valor} id={contraste && styles.contraste}>R${props.valor.toFixed(2)}</h2>
        <div className={styles.funcoes}>
          <a href="/produto" className={styles.button} id={contraste && styles.contraste}>VER DETALHES</a>
          <div className={styles.coracao}>
            {isClick &&
              <img src={coracaoCheio} isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {!isClick &&
              <img src={coracaoVazio} isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
          </div>
        </div>
      </div>
    )
}