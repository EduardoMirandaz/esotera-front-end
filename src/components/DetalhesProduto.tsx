import styles from './DetalhesProduto.module.css'
import { produto } from "../data.json";
import { React, useState } from 'react';
import HTMLReactParser from "html-react-parser";

export function DetalhesProduto(props) {
    const [isClick, setClick] = useState(false);
    return (
        <div className={styles.detalhesProduto}>
            <h1 className={styles.tituloDetalhes}>Detalhes do produto</h1>
            
            {isClick &&
                <p className={styles.paragrafoDetalhesFechado}>{HTMLReactParser(produto[props.idProduto].descricaoDetalhadaMaior)}</p>
            }
            {!isClick &&
                <p className={styles.paragrafoDetalhesAberto}>{HTMLReactParser(produto[props.idProduto].descricaoDetalhadaMaior)}</p>
            }
            <div className={styles.caixaBotao}>
                {isClick &&
                    <button onClick={() => setClick(!isClick)} className={styles.botao}>Ver mais descrição ↓</button>
                }
                {!isClick &&
                    <button onClick={() => setClick(!isClick)} className={styles.botao}>Ver menos descrição ↑</button>
                }
            </div>
            
        </div>
    )
}

