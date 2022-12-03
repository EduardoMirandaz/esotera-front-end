import React from "react";
import { Card } from "./Card";
import styles from './Vitrine.module.css'

interface Card {
  imagemPrincipal?: string;
  categoria?: string;
  titulo: string;
  valor:number;
}

export function Vitrine(props){
    return(
      <div className={styles.container}>
        {props.data.map((card) => {
                return(
                    <Card
                      titulo={card.titulo} 
                      imagemPrincipal={card.imagemPrincipal}
                      valor={card.valor}
                      categoria={card.categoria}
                    />
                )
            })}
      </div>
    )
}