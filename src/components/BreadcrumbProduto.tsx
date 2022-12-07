import styles from './BreadcrumbProduto.module.css'; 
import React from 'react';

export function BreadcrumbProduto(props) {
    const pagina = props.pagina;
    if (pagina == 'produto'){
        return (
            <div className={styles.breadcrumb}>
                <span className={styles.home}>Página Principal</span>
                <span> / </span>
                <span className={styles.produto}>Produto</span>
            </div>
        )
    }
    if(pagina == 'carrinho'){
        return (
            <div className={styles.breadcrumb}>
                <span className={styles.home}>Página Principal</span>
                <span> / </span>
                <span className={styles.produto}>Carrinho</span>
            </div>
        )
    }
}

export default BreadcrumbProduto;