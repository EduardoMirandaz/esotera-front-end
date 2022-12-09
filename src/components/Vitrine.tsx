import React from "react";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { Card } from "./Card";
import styles from './Vitrine.module.css'

interface Card {
  imagemPrincipal?: string;
  categoria?: string;
  titulo: string;
  valor:number;
}

export function Vitrine(props){
    const { contraste } = useAuthContext();
    return(
      <div className={styles.container} id={contraste && styles.contraste}>
        {props.data.map((card) => {
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
    )
}