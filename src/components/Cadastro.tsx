import styles from './Cadastro.module.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { PrincipalLogado } from '../pages/PrincipalLogado';
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/auth/AuthContext';

export function Cadastro({showModalCad, setShowModalCad}){

    const { setUsuario } = useAuthContext();
    const { contraste } = useAuthContext();
    
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); 

    const navigateToPrincipal = () => {
        localStorage.setItem("username", nome);
        localStorage.setItem(email, nome);
        navigate("/")
    };

    
    return(
        <>
        {showModalCad ? (
            <Modal open={showModalCad} onClose={() => {setShowModalCad(prev => !prev)}} showModalCad={showModalCad} classNames={{ modal: contraste ? styles.customModalContraste : styles.customModal }}  center>
                <div className={styles.modalBody} id={contraste && styles.contraste}>
                    <div className={styles.modalHeader}>
                        <h2>Cadastro</h2>
                    </div>
                    <form>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="nome">Nome</label>
                            <input 
                                onChange={(e)=> setNome(e.target.value)}
                                type="text" 
                                placeholder="Digite seu nome" 
                                aria-required="true" 
                                required
                            />
                        
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                onChange={(e)=> setEmail(e.target.value)}
                                type="email" 
                                placeholder="example@email.com" 
                                aria-required="true" 
                                required
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input 
                                type="password" 
                                placeholder="No mínimo 8 caractéres" 
                                aria-required="true" 
                                required
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Redigite sua senha</label>
                            <input 
                                type="password" 
                                placeholder="Digite sua senha novamente" 
                                aria-required="true" 
                                required
                            />
                        </div>
                        <button type="button" className={styles.button} onClick={() => {setUsuario(nome), navigateToPrincipal(), setShowModalCad(prev => !prev) }}>CADASTRAR</button>
                        <div className={styles.divider}>
                            <span role="text" className={styles.dividerSpan} aria-label="Ou cadastre-se com uma dessas opções">ou cadastre-se com</span>
                            <hr/>
                        </div>
                        <div className={styles.socialNetworkWrapper}>
                            <button className={styles.socialNetworkButton} type="button">
                                <span className={styles.socialButtonIconFacebook}>&nbsp;</span>Facebook
                            </button>
                            <button type="button" className={styles.socialNetworkButton}>
                                <span className={styles.socialButtonIconGoogle}>&nbsp;</span>Google
                            </button>
                        </div>
                    </form>
                </div>
                
            </Modal>
        ) : null}
        </>
    )
}

export default Cadastro