import React from "react";
import { Card } from "./Card";
import styles from './Vitrine.module.css'

interface Card {
  imagemPrincipal?: string;
  categoria?: string;
  descricao: string;
  valor:number;
}

export function Vitrine(props){
    return(
      <div className={styles.container}>
        {props.data.map((card) => {
                return(
                    <Card
                      descricao={card.descricao} 
                      imagemPrincipal={card.imagemPrincipal}
                      valor={card.valor}
                      categoria={card.categoria}
                    />
                )
            })}
      </div>
    )
}