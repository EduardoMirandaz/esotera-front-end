import React, { useState } from 'react'
import styles from './SumarioProduto.module.css'
import estrela from '../assets/star.svg'
import meiaEstrela from '../assets/star-half.svg'
import carrinho from '../assets/carrinho.svg'
import map from '../assets/mapa.svg'
import mapContraste from '../assets/mapaContraste.svg'
import { produto } from '../data.json'
import { useAuthContext } from '../contexts/auth/AuthContext'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'
import coracaoCheioContraste from '../assets/coracaoCheioContraste.svg'
import coracaoVazioContraste from '../assets/coracaoVazioContraste.svg'

export function SumarioProduto(props){
    const [contador, setCount] = useState(1); 
    // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    const { contraste } = useAuthContext();
    let temEstoque = produto[props.idProduto].qtdEmEstoque>0;
  
    function incrementar() {
      //setCount(prevCount => prevCount+=s1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

    const [isClick, setClick] = useState(false);
    
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
        <div className={styles.containerSumario} id={contraste && styles.contraste}>
            <h1 className={styles.titulo}>{produto[props.idProduto].titulo}</h1>
            <div className={styles.subCategorias}>
                {temEstoque &&
                    <p className={styles.estoque} id={contraste && styles.contraste}>Em estoque</p>
                }
                {!temEstoque &&
                    <p className={styles.naoDisponivel} id={contraste && styles.contraste}>Não disponível</p>
                }
                <p className={styles.comprados}>{produto[props.idProduto].qtdComprados} Comprados</p>
                <div className={styles.estrelas}>
                    <div className={styles.stars} style={{"--rating": produto[props.idProduto].qtdDeEstrelas} as React.CSSProperties} aria-label="Rating of this product is 2.3 out of 5."/>
                    <p className={styles.avaliacao}>{produto[props.idProduto].qtdDeEstrelas}({produto[props.idProduto].qtdAvaliacoes})</p>
                </div>
                <p className={styles.preco}>R${produto[props.idProduto].valor.toFixed(2)}</p>
            </div>
            <p className={styles.texto}>{produto[props.idProduto].descricaoDetalhadaMenor}</p>
            <div className={styles.botoesProduto}>
                <div className={styles.contador}>
                    <button className={styles.decrementar} onClick={decrementar} id={contraste && styles.contraste}>−</button>
                    <h1 className={styles.quantidade} id={contraste && styles.contraste}>{contador}</h1>
                    <button className={styles.incrementar} onClick={incrementar} id={contraste && styles.contraste}>+</button>
                </div> 
                <button className={styles.botaoCarrinho} id={contraste && styles.contraste}>Adicionar ao carrinho<img src={carrinho} alt="Adicionar ao carrinho"/></button>
                <button className={styles.botaoFrete} id={contraste && styles.contraste}>Calcular o frete
                  {
                    contraste &&
                    <img src={mapContraste} alt="Calcular o frete"/>
                  }
                  {
                    !contraste &&
                    <img src={map} alt="Calcular o frete"/>
                  }
                </button>
                <button className={styles.botaoFavorito} id={contraste && styles.contraste} onClick={() => setClick(!isClick)}>
                  {isClick && contraste &&
                    <img src={coracaoCheioContraste}/>
                  }
                  {!isClick && contraste &&
                    <img src={coracaoVazioContraste}/>
                  }
                  {isClick && !contraste &&
                    <img src={coracaoCheio}/>
                  }
                  {!isClick && !contraste &&
                    <img src={coracaoVazio}/>
                  }
                </button>
            </div>
        </div>
    )
}