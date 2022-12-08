import styles from './MenuLogout.module.css'; 
import React from 'react';

export function MenuLogout() {
    return (
        <div className={styles.breadcrumb}>
            <span className={styles.home}>Página Principal</span>
            <span> / </span>
            <span className={styles.produto}>Produto</span>
        </div>
    )
}

export default MenuLogout;