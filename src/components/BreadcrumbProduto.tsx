import styles from './BreadcrumbProduto.module.css'; 
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';

export function BreadcrumbProduto(props) {
    const { contraste } = useAuthContext();
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