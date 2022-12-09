import styles from './DetalhesProduto.module.css'
import { produto } from "../data.json";
import { React, useState } from 'react';
import HTMLReactParser from "html-react-parser";
import { useAuthContext } from '../contexts/auth/AuthContext';

export function DetalhesProduto(props) {
    const [isClick, setClick] = useState(true);
    const { contraste } = useAuthContext();
  
    return (
        <div className={styles.detalhesProduto} id={contraste && styles.contraste}>
            <h1 className={styles.tituloDetalhes}>Detalhes do produto</h1>
            
            {isClick &&
                <p className={styles.paragrafoDetalhesFechado}>{HTMLReactParser(produto[props.idProduto].descricaoDetalhadaMaior)}</p>
            }
            {!isClick &&
                <p className={styles.paragrafoDetalhesAberto}>{HTMLReactParser(produto[props.idProduto].descricaoDetalhadaMaior)}</p>
            }
            <div className={styles.caixaBotao}>
                {isClick &&
                    <button onClick={() => setClick(!isClick)} className={styles.botao} id={contraste && styles.contraste}>Ver descrição completa ↓</button>
                }
                {!isClick &&
                    <button onClick={() => setClick(!isClick)} className={styles.botao} id={contraste && styles.contraste}>Ver menos descrição ↑</button>
                }
            </div>
            
        </div>
    )
}

