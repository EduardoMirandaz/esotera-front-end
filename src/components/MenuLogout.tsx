import styles from './MenuLogout.module.css'; 
import React from 'react';
import { useAuthContext } from '../contexts/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export function MenuLogout() {

    const { setModalLogout } = useAuthContext();

    const navigate = useNavigate();

    const navigateToPrincipal = () => {
        navigate('/');
    };

    const deslogar = () => {
        setModalLogout(prev => !prev);
        localStorage.removeItem("username");
        navigateToPrincipal();
    }

    const { contraste } = useAuthContext();

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.caixaInternaDoLogout} id={contraste && styles.contraste}>
                <p className={styles.desejaSair}>Deseja sair da conta?</p>
                <button type="button" onClick={deslogar} className={styles.botaoSair} aria-label="Sair da conta">SAIR</button>
            </div>
        </div>
            <div className={styles.setaDaCaixaInternaDoLogout}>

            </div>
        </>
    )
}

export default MenuLogout;