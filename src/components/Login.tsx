import styles from './Login.module.css';
import React from 'react';
import { CgClose } from 'react-icons/cg'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export function Login({showModal, setShowModal}){
   
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
                            <input type="email" name="email" placeholder="" autocomplete="off" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="" autocomplete="off" aria-required="true" required/>
                            <a className={styles.esqueceuSenha} href="">Esqueceu sua senha?</a>
                        </div>
                        <button type="submit" className={styles.button}>ENTRAR</button>
                        <div className={styles.cadastrar}>
                            <span>Não possui conta?&nbsp;&nbsp;</span>
                            <a href="">CADASTRE-SE</a>
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
        </>
    )
}

export default Login