import styles from './MenuLogout.module.css'; 
import React from 'react';

export function MenuLogout() {
    return (
        <div className={styles.caixaInternaDoLogout}>
            Você já está logade!
        </div>
    )
}

export default MenuLogout;