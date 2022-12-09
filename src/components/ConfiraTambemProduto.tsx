import React from "react";
import { Card } from "./Card";
import styles from './ConfiraTambemProduto.module.css'


export function ConfiraTambemProduto(props){
    return(
      <>
        <h2 className={styles.tituloConfiraTambem}>Confira também</h2>
        <div className={styles.cardContainer}>
          {props.produto.map((card) => {
            return(
              <Card
                titulo={card.titulo}
                imagemPrincipal={card.imagemPrincipal}
                valor={card.valor}
                categoria={card.categoria}
                idProduto={card.idProduto}
                descricaoImg={card.descricaoImg}
              />
            )
          })}
        </div>
      </>
      
    )
}