import styles from './Cadastro.module.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/auth/AuthContext';
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

export function atualizarUsuario(){

}

export function Cadastro({showModalCad, setShowModalCad}){

    const { setUsuario } = useAuthContext();
    const { contraste } = useAuthContext();
    
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); 

    function cadastrar(){
        setUsuario(nome);
        localStorage.setItem("username", nome);
        localStorage.setItem(email, nome);
        localStorage.setItem("carrinho", JSON.stringify([]));
        navigate("/");
        setShowModalCad(prev => !prev);
    }

    
    return(
        <>
        {showModalCad ? (
         <IconContext.Provider value={{ color: contraste ? "white" : "#11002B", size: "2em"}}>
            <Modal open={showModalCad} onClose={() => {setShowModalCad(prev => !prev)}} showModalCad={showModalCad} classNames={{ modal: contraste ? styles.customModalContraste : styles.customModal }}  center closeIcon={<IoClose aria-labelledby="Fechar tela de cadastro"/>}>
                <div className={styles.modalBody} id={contraste && styles.contraste}>
                    <div className={styles.modalHeader}>
                        <h2>Cadastro</h2>
                    </div>
                    <form onSubmit={(e) => {e.preventDefault(); cadastrar()}}>
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
                                placeholder="No mínimo 8 caracteres" 
                                aria-required="true" 
                                required
                                minLength={8}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="senha">Redigite sua senha</label>
                            <input 
                                type="password" 
                                placeholder="Digite sua senha novamente" 
                                aria-required="true" 
                                required
                                minLength={8}
                            />
                        </div>
                        <input type="submit" className={styles.button} aria-label="botão cadastrar" value="CADASTRAR"/>
                        <div className={styles.divider}>
                            <span role="text" className={styles.dividerSpan} aria-label="Ou cadastre-se com uma dessas opções">ou cadastre-se com</span>
                            <hr/>
                        </div>
                        <div className={styles.socialNetworkWrapper}>
                            <button className={styles.socialNetworkButton} type="button" aria-label="Entrar com sua conta do Facebook">
                                <span className={styles.socialButtonIconFacebook}>&nbsp;</span>Facebook
                            </button>
                            <button type="button" className={styles.socialNetworkButton}  aria-label="Entrar com sua conta do Google">
                                <span className={styles.socialButtonIconGoogle}>&nbsp;</span>Google
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </IconContext.Provider>
        ) : null}
        </>
    )
}

export default Cadastro