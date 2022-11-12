import styles from './Login.module.css';
import React from 'react';
import { CgClose } from 'react-icons/cg'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export function Login({showModal, setShowModal}){
   
    return(
        <>
        {showModal ? (
            <Modal open={showModal} onClose={() => {setShowModal(prev => !prev)}} showModal={showModal} classNames={{ modal: 'customModal' }}  center>
                <div className={styles.modalBody}>
                    <div className={styles.modalHeader}>
                        <h2>Login</h2>
                    </div>
                    <form novalidate="novalidate">
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="" required="" autocomplete="off" aria-required="true" />
                            <a className={styles.esqueceuSenha} href="">Esqueceu sua senha?</a>
                        </div>
                        <a href="" className={styles.button}>ENTRAR</a>
                        <div className={styles.cadastrar}>
                            <span>Não possui conta?&nbsp;&nbsp;</span>
                            <a href="">CADASTRE-SE</a>
                        </div>
                        <div className={styles.divider}>
                            <span role="text" aria-label="Ou entre com uma dessas opções">ou entre com</span>
                            <hr/>
                        </div>
                        <div className={styles.socialNetworkWrapper}>
                            <button className={styles.socialNetworkButton} type="button" metrics-funnel-click="facebookAuth()" metrics-funnel-id="facebook-sign-in">
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