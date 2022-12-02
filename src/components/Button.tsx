import React from "react";
import styles from './Button.module.css'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'

interface Button {
  nameSvg?: string;
  height?: number;
  width?: number;
}

export function Button(props:Button){
    return(
      <a href="" className={styles.button}>VER DETA</a>
    )
}