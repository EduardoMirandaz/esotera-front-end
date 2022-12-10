import styles from './ModalCompraRealizada.module.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useAuthContext } from '../contexts/auth/AuthContext';
import { IoClose } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';

export function ModalCompraRealizada({showModal, setShowModal}){
    

    const navigate = useNavigate();

    const navigateToPrincipal = () => {
        navigate('/');
    };

    const { contraste, getCarrinhoList } = useAuthContext();
    const [ setCarrinhoList] = useState(getCarrinhoList());
    
    const fechaModalVaiPraHome = () => {
            setShowModal(prev => !prev);
            localStorage.removeItem("username");
            localStorage.setItem("carrinho", "[]"); 
            setCarrinhoList([]);
            navigateToPrincipal();
        }
    return(
        <>
        {showModal ? (
        <IconContext.Provider value={{ color: contraste ? "white" : "#11002B", size: "2em"}}>
            <Modal open={showModal} onClose={fechaModalVaiPraHome} showModal={showModal} classNames={{ modal: contraste ? styles.customModalContraste : styles.customModal  }}  center closeIcon={<IoClose aria-labelledby="Fechar tela de compra realizada e voltar para a página inicial"/>}>
                <div className={styles.modalBody}>
                    <div className={styles.icon} >
                        <IconContext.Provider value={{ color: contraste ? "white" : "#37833B", size: "4em"}}>
                            <BsCheckCircle aria-labelledby="ícone de confirmação"/>
                        </IconContext.Provider>
                    </div>
                    <div className={styles.text}>
                        <h4>Compra realizada com sucesso!</h4>
                    </div>
                </div>
            </Modal>
        </IconContext.Provider>
        ) : null}
        </>
    )
}

export default ModalCompraRealizada