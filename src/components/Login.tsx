import styles from './Login.module.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Cadastro from './Cadastro';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

export function Login({showModal, setShowModal}){
    const [showModalCad, setShowModalCad] = useState(false)
    const openModalCad = () => {
        setShowModalCad(prev => !prev)
        setShowModal(prev => !prev)
    }
    const [loginDigitado, setLoginDigitado] = useState("");
    const { contraste } = useAuthContext();
    const navigate = useNavigate();

    const logar = () => {
      let userCadastrado = localStorage.getItem(loginDigitado);
      console.log(userCadastrado)
      if(userCadastrado){
        localStorage.setItem("username", userCadastrado);
      }
      setShowModal(prev => !prev);
    };

    return(
        <>
        {showModal ? (
        <IconContext.Provider value={{ color: contraste ? "white" : "#11002B", size: "2em"}}>
            <Modal open={showModal} onClose={() => {setShowModal(prev => !prev)}} showModal={showModal} classNames={{ modal: contraste ? styles.customModalContraste : styles.customModal }}  center closeIcon={<IoClose aria-labelledby="Fechar tela de entrar na conta" />}>
                <div className={styles.modalBody} id={contraste && styles.contraste}>
                    <div className={styles.modalHeader}>
                        <h2>Entrar</h2>
                    </div>
                    <form>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                onChange={(e)=> setLoginDigitado(e.target.value)}
                                type="email" placeholder="Digite seu e-mail" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" placeholder="Digite sua senha" aria-required="true" required/>
                            <a className={styles.esqueceuSenha} href="">Esqueceu sua senha?</a>
                        </div>
                        <button type="submit" className={styles.button} onClick={logar}>ENTRAR</button>
                        <div onClick={openModalCad} className={styles.cadastrar}>
                            <span className={styles.semContaSpan}>Não possui conta?&nbsp;&nbsp;</span>
                            <span className={styles.cadastre}>CADASTRE-SE</span>
                        </div>
                        <div className={styles.divider}>
                            <span role="text" className={styles.dividerSpan} aria-label="Ou entre com uma dessas opções">ou entre com</span>
                            <hr/>
                        </div>
                        <div className={styles.socialNetworkWrapper}>
                            <button className={styles.socialNetworkButton} type="button" aria-label="Entrar com o Facebook">
                                <span className={styles.socialButtonIconFacebook}>&nbsp;</span>Facebook
                            </button>
                            <button type="button" className={styles.socialNetworkButton} aria-label="Entrar com o Google">
                                <span className={styles.socialButtonIconGoogle}>&nbsp;</span>Google
                            </button>
                        </div>
                    </form>
                </div>
                
            </Modal>
        </IconContext.Provider>
        ) : null}
        <Cadastro showModalCad={showModalCad} setShowModalCad={setShowModalCad} />
        <Routes>
          <Route path="/"/>
        </Routes>
        </>
    )
}

export default Login