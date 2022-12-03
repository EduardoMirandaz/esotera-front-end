import React, { useState } from 'react'
import styles from './SumarioProduto.module.css'
import estrela from '../assets/star.svg'
import meiaEstrela from '../assets/star-half.svg'
import carrinho from '../assets/carrinho.svg'
import mapPin from '../assets/map-pin.svg'
import coracaoVazio from '../assets/coracaoVazioPurple500.svg'
import { produto } from '../data.json'


export function SumarioProduto(props){
    const [contador, setCount] = useState(1); 
    // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    
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
        <div className={styles.containerSumario}>
            <h1 className={styles.titulo}>{produto[props.idProduto].titulo}</h1>
            <div className={styles.subCategorias}>
                <p className={styles.estoque}>Em estoque</p>
                <p className={styles.comprados}>{produto[props.idProduto].qtdComprados} Comprados</p>
                <div className={styles.estrelas}>
                    <img src={estrela} alt="Avaliação"/>
                    <img src={estrela} alt="Avaliação"/>
                    <img src={estrela} alt="Avaliação"/>
                    <img src={estrela} alt="Avaliação"/>
                    <img src={meiaEstrela} alt="Avaliação"/>
                    <p className={styles.avaliacao}>{produto[props.idProduto].qtdDeEstrelas}({produto[props.idProduto].qtdAvaliacoes})</p>
                </div>
                <p className={styles.preco}>R${produto[props.idProduto].valor}</p>
            </div>
            <p className={styles.texto}>{produto[props.idProduto].descricaoDetalhadaMenor}</p>
            <div className={styles.botoesProduto}>
                <div className={styles.contador}>
                    <button className={styles.decrementar} onClick={decrementar}>−</button>
                    <h1>{contador}</h1>
                    <button className={styles.incrementar} onClick={incrementar}>+</button>
                </div> 
                <button className={styles.botaoCarrinho}>Adicionar ao carrinho<img src={carrinho} alt="Adicionar ao carrinho"/></button>
                <button className={styles.botaoFrete}>Calcular o frete<img src={mapPin} alt="Calcular o frete"/></button>
                <button className={styles.botaoFavorito}><img src={coracaoVazio} alt="Adicionar aos favoritos"/></button>
            </div>
        </div>
    )
}