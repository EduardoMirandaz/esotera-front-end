import styles from './Cadastro.module.css';
import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export function Cadastro({showModalCad, setShowModalCad}){
   
    return(
        <>
        {showModalCad ? (
            <Modal open={showModalCad} onClose={() => {setShowModalCad(prev => !prev)}} showModalCad={showModalCad} classNames={{ modal: styles.customModal }}  center>
                <div className={styles.modalBody}>
                    <div className={styles.modalHeader}>
                        <h2>Cadastro</h2>
                    </div>
                    <form>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" placeholder="" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="celular">Celular</label>
                            <input type="tel" name="celular" placeholder="" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="" aria-required="true" required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Redigite sua senha</label>
                            <input type="password" name="redigite" placeholder="" aria-required="true" required/>
                        </div>
                        <button type="submit" className={styles.button}>CADASTRAR</button>
                        <div className={styles.divider}>
                            <span role="text" aria-label="Ou cadastre-se com uma dessas opções">ou cadastre-se com</span>
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