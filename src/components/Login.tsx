import styles from './Login.module.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Cadastro from './Cadastro';

export function Login({showModal, setShowModal}){
    const [showModalCad, setShowModalCad] = useState(false)
    const openModalCad = () => {
        setShowModalCad(prev => !prev)
        setShowModal(prev => !prev)
    }
    return(
        <>
        {showModal ? (
            <Modal open={showModal} onClose={() => {setShowModal(prev => !prev)}} showModal={showModal} classNames={{ modal: styles.customModal }}  center>
                <div className={styles.modalBody}>
                    <div className={styles.modalHeader}>
                        <h2>Entrar</h2>
                    </div>
                    <form>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Digite sua senha" aria-required="true" required/>
                            <a className={styles.esqueceuSenha} href="">Esqueceu sua senha?</a>
                        </div>
                        <button type="submit" className={styles.button}>ENTRAR</button>
                        <div onClick={openModalCad} className={styles.cadastrar}>
                            <span>Não possui conta?&nbsp;&nbsp;</span>
                            <span className={styles.cadastre}>CADASTRE-SE</span>
                        </div>
                        <div className={styles.divider}>
                            <span role="text" aria-label="Ou entre com uma dessas opções">ou entre com</span>
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
        <Cadastro showModalCad={showModalCad} setShowModalCad={setShowModalCad} />
        </>
    )
}

export default Login