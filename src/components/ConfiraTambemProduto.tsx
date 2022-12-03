import React from "react";
import { Card } from "./Card";
import styles from './ConfiraTambemProduto.module.css'
import { Vitrine } from "./Vitrine";


export function ConfiraTambemProduto(props){
    return(
      <>
        <h2 className={styles.tituloConfiraTambem}>Confira também</h2>
        <Vitrine data={props.produto.cards}/>
      </>
      
    )
}