import styles from './Burger.module.css';
import React, {useState} from 'react';
import {CgMenu, CgClose} from 'react-icons/cg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import headerLogo from '../assets/logo.svg'
import Login from './Login';
import { useAuthContext } from '../contexts/auth/AuthContext';

export function Burger(){
    const { contraste } = useAuthContext();

    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const closeIcon = <CgClose className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const carrinho = [
        {},
        {},
        {}
    ]
    return(
        <>
            <div className={styles.burgerBar} id={contraste && styles.contraste}>
                <div className={styles.burgerContainer}>
                    {open ? closeIcon : hamburgerIcon}
                </div>
                <img className={styles.logo} src={headerLogo} alt="Logo" />
                <div className={styles.icones}>
                    <a href="">
                        <div className={styles.carrinho}>
                            <img className={styles.carrinhoImg} src={headerCarrinho} alt="Ir para o carrinho" />
                            <div className={styles.quantidade} id={contraste && styles.contraste}>{carrinho.length}</div>
                        </div>
                    </a>
                    <img  onClick={openModal} className={styles.perfilImg} src={headerPerfil} alt="Entrar no Perfil" />
                    <a href="">
                        <img className={styles.coracaoImg} src={headerCoracao} alt="Ir para os favoritos" />
                    </a>
                </div>
            </div>
            {open && <div className={styles.dropMenu} id={contraste && styles.contraste}>
                <button className={styles.botaoPromo}>Promoções</button>
                <button className={styles.botaoRegular}>Página Inicial</button>
                <button className={styles.botaoRegular}>Incensos</button>
                <button className={styles.botaoRegular}>Cristais</button>
                <button className={styles.botaoRegular}>Signos</button>
                <button className={styles.botaoRegular}>Cartas</button>
                <button className={styles.botaoRegular}>Artefatos</button>
            </div>}
            <Login showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Burger