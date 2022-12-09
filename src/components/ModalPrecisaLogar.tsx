import styles from './ModalPrecisaLogar.module.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useAuthContext } from '../contexts/auth/AuthContext';
import { IoClose } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import Login from './Login';

export function ModalPrecisaLogar({showModal, setShowModal}){
    const { contraste } = useAuthContext();

    const fechaModal = () => {
            setShowModal(prev => !prev);
        }

    const [showModalLogin, setShowModalLogin] = useState(false);
    const openModalLogin = () => {
        setShowModalLogin(prev => !prev);
        setShowModal(prev => !prev);
    }
    return(
        <>
        {showModal ? (
        <IconContext.Provider value={{ color: contraste ? "white" : "#11002B", size: "2em"}}>
            <Modal open={showModal} onClose={fechaModal} showModal={showModal} classNames={{ modal: contraste ? styles.customModalContraste : styles.customModal  }}  center closeIcon={<IoClose aria-labelledby="Fechar tela de compra realizada e voltar para a página inicial"/>}>
                <div className={styles.modalBody} id={contraste && styles.contraste}>
                    <div className={styles.icon} >
                        <IconContext.Provider value={{ color: contraste ? "white" : "#494949", size: "4em"}}>
                            <BsExclamationCircle aria-labelledby="ícone de atenção"/>
                        </IconContext.Provider>
                    </div>
                    <div className={styles.text}>
                        <h4>É necessário entrar em sua conta para utilizar o carrinho.</h4>
                    </div>
                    <button className={styles.button} onClick={openModalLogin}>
                            Entrar
                    </button>
                </div>
            </Modal>
        </IconContext.Provider>
        ) : null}
        <Login showModal={showModalLogin} setShowModal={setShowModalLogin} />
        </>
    )
}

export default ModalPrecisaLogar