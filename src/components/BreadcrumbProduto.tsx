import styles from './BreadcrumbProduto.module.css'; 
import React from 'react';
import { produto } from "../data.json";

export function BreadcrumbProduto(props) {
    return (
        <div className={styles.breadcrumb}>
            <span className={styles.home}>Página Principal</span>
            <span> / </span>
            <span className={styles.Produto}>Produto</span>
        </div>
    )
}

export default BreadcrumbProduto;