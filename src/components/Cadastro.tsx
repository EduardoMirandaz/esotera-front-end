import styles from './Cadastro.module.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { PrincipalLogado } from '../pages/PrincipalLogado';
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/auth/AuthContext';



export function Cadastro({showModalCad, setShowModalCad}){

    const { usuario, setUsuario } = useAuthContext();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const { contraste } = useAuthContext();
    const navigate = useNavigate(); 

    const navigateToPrincipalLogado = () => {
        if(senha != senha2){
            console.log("Senhas diferentes!");
        }
                
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
                                onChange={(e)=> setUsuario(e.target.value)}
                                type="text" 
                                name="nome" 
                                placeholder="Digite seu nome" 
                                aria-required="true" 
                                required
                            />
                        
                        </div>
                        {/*<div className={styles.inputWrapper}>
                            <label htmlFor="celular">Celular</label>
                            <input type="tel" name="celular" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} placeholder="" aria-required="true" required/>
                        </div>*/}
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" 
                                name="email" 
                                placeholder="example@email.com" 
                                aria-required="true" 
                                required
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input 
                                onChange={(e)=>setSenha(e.target.value)}
                                type="password" 
                                name="senha" 
                                placeholder="No mínimo 8 caractéres" 
                                aria-required="true" 
                                required
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Redigite sua senha</label>
                            <input 
                                onChange={(e)=>setSenha2(e.target.value)}
                                type="password" 
                                name="redigite" 
                                placeholder="Digite sua senha novamente" 
                                aria-required="true" 
                                required
                            />
                        </div>
                        <button type="submit" className={styles.button} onClick={navigateToPrincipalLogado}>CADASTRAR</button>
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
        <Routes>
          <Route path="/PrincipalLogado" element={<PrincipalLogado />} />
        </Routes>
        </>
    )
}

export default Cadastro