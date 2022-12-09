import React, { useState } from "react";
import styles from './Card.module.css'
import semImagem from '../assets/semImagem.svg'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'
import coracaoCheioContraste from '../assets/coracaoCheioContraste.svg'
import coracaoVazioContraste from '../assets/coracaoVazioContraste.svg'
import { useAuthContext } from "../contexts/auth/AuthContext";
import { Link } from "react-router-dom";

interface Card {
  imagemPrincipal?: string;
  categoria?: string;
  titulo: string;
  valor:number;
  idProduto:number;
}

export function Card(props:Card){
    const [isClick, setClick] = useState(false);
    const { contraste, setModalLogout } = useAuthContext();
    const newUrl = "/produto/"+props.idProduto
    return(
      <div className={styles.fundo} id={contraste && styles.contraste}>
        <Link reloadDocument to={newUrl} onClick={() => {setModalLogout(false)}}>

          {props.imagemPrincipal &&
              <img className={styles.imagem} src={props.imagemPrincipal} alt="Imagem do Produto"/>
          }
          {!props.imagemPrincipal &&
              <img className={styles.imagem} src={semImagem} alt="Imagem do Produto"/>
          }
        </Link>
        {props.categoria &&
            <p className={styles.categoria} id={contraste && styles.contraste}>{props.categoria}</p>
        }
        {!props.categoria &&
            <p className={styles.categoria} id={contraste && styles.contraste}>Outros</p>
        }
        <h1 className={styles.titulo}>{props.titulo}</h1>
        <h2 className={styles.valor} id={contraste && styles.contraste}>R${props.valor.toFixed(2)}</h2>
        <div className={styles.funcoes}>
  
          <Link reloadDocument to={newUrl} className={styles.button} onClick={() => {setModalLogout(false)}} id={contraste && styles.contraste}>VER DETALHES</Link>
          <div className={styles.coracao}>
            
            {isClick && contraste &&
              <img alt="Produto adicionado aos favoritos" src={coracaoCheioContraste} isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {!isClick && contraste &&
              <img alt="Adicionar produto aos favoritos" src={coracaoVazioContraste} isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {isClick && !contraste &&
              <img alt="Produto adicionado aos favoritos" src={coracaoCheio} isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {!isClick && !contraste &&
              <img alt="Adicionar produto aos favoritos" src={coracaoVazio} isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
          </div>
        </div>
      </div>
    )
}