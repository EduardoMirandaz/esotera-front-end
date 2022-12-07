import styles from './BreadcrumbProduto.module.css'; 
import React from 'react';
import { Link } from 'react-router-dom';

export function BreadcrumbProduto(props) {
    const pagina = props.pagina;
    return(
        <div className={styles.breadcrumb}>
                <Link to="/" className={styles.home}>Página Principal</Link>
                <span> / </span>
                <span className={styles.produto}>{props.pagina}</span>
        </div>
    )
}

export default BreadcrumbProduto;