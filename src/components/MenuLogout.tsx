import styles from './MenuLogout.module.css'; 
import React from 'react';
import { useAuthContext } from '../contexts/auth/AuthContext';

export function MenuLogout() {

    const { setModalLogout } = useAuthContext();

    const deslogar = () => {
        setModalLogout(prev => !prev);
        localStorage.removeItem("username")
    }

    return (
        <>
            <div className={styles.caixaInternaDoLogout}>
                Você já está logade!
                <button type="button" onClick={deslogar} className={styles.botaoSair}>SAIR</button>
            </div>
            <div className={styles.setaDaCaixaInternaDoLogout}>

            </div>
        </>
    )
}

export default MenuLogout;