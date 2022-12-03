import styles from './BreadcrumbProduto.module.css'; 
import React from 'react';
import { produto } from "../data.json";

export function Breadcrumb(props) {
    return (
        <div className={styles.breadcrumb}>
            <span className={styles.home}>Home</span>
            <span> / </span>
            <span className={styles.Produto}>Produto</span>
            <span> / </span>
            <p className={styles.titulo}>{produto[props.idProduto].titulo}</p>
        </div>
    )
}

export default Breadcrumb