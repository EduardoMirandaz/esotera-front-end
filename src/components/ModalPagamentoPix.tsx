import styles from './ModalPagamentoPix.module.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useAuthContext } from '../contexts/auth/AuthContext';
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import qrCode from '../assets/QRCodePix.png'

export function ModalPagamentoPix({showModal, setShowModal}){
    const codPix = '00020126580014BR.GOV.BCB.PIX01362f5104fa-bc8f-4018-827c-f44423fbf5da520400005303986540543.005802BR5925Joao Pedro Ribeiro da Sil6009SAO PAULO61080540900062070503***6304AF63';

    const btnCopyBeforeText = "Copiar código do QR Code";
    const btnCopyAfterText = "Código copiado";

    const btnCopyBeforeIcon = styles.copyButtonIconToCopy;
    const btnCopyAfterIcon = styles.copyButtonIconCopied;

    const { contraste } = useAuthContext();

    const [btnCopyText, setBtnCopyText] = useState(btnCopyBeforeText);
    const [btnCopyIcon, setBtnCopyIcon] = useState(btnCopyBeforeIcon);

    const copyQrCode = () => {
        navigator.clipboard.writeText(codPix);
        setBtnCopyText(btnCopyAfterText);
        setBtnCopyIcon(btnCopyAfterIcon);

        setTimeout(() => {
            setBtnCopyText(btnCopyBeforeText);
            setBtnCopyIcon(btnCopyBeforeIcon);
        }, 2000);
    }


    return(
        <>
        {showModal ? (
        <IconContext.Provider value={{ color: contraste ? "white" : "#11002B", size: "2em"}}>
            <Modal open={showModal} onClose={() => {setShowModal(prev => !prev)}} showModal={showModal} classNames={{ modal: contraste ? styles.customModalContraste : styles.customModal }}  center closeIcon={<IoClose aria-labelledby="Fechar tela de pagar com PIX"/>}>
                <div className={styles.modalBody} id={contraste && styles.contraste}>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.texto}>Pix</h2>
                        <span className={styles.texto} role="text">Escaneie o <span className={styles.texto} lang='en'>QR Code</span> abaixo para prosseguir com o pagamento via Pix</span>
                    </div>
                    <div>
                        <div className={styles.qrCodeContainer}>
                            <img className={styles.qrCodeImg} src={qrCode} alt="Código QR para pagamento via Pix" />
                        </div>
                        <div className={styles.divider}>
                            <span className={styles.mainText} role="text">ou copie o código do <span lang='en'>QR Code</span></span>
                            <hr/>
                        </div>
                        <button className={styles.button} onClick={copyQrCode}>
                            {btnCopyText}&nbsp;<span className={btnCopyIcon}>&nbsp;</span>
                        </button>
                    </div>
                </div>
                
            </Modal>
        </IconContext.Provider>
        ) : null}
        </>
    )
}

export default ModalPagamentoPix