import styles from './Burger.module.css';
import React, {useState} from 'react';
import {CgMenu, CgClose} from 'react-icons/cg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import headerLogo from '../assets/logo.svg'

export function Burger(){
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const closeIcon = <CgClose className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    return(
        <>
            <div className={styles.burgerBar}>
                <div className={styles.burgerContainer}>
                    {open ? closeIcon : hamburgerIcon}
                </div>
                <img className={styles.logo} src={headerLogo} alt="Logo" />
                <div className={styles.icones}>
                    <a href="">
                        <div className={styles.carrinho}>
                            <img className={styles.carrinhoImg} src={headerCarrinho} alt="Ir para o carrinho" />
                        </div>
                    </a>
                    <a href="">
                        <img className={styles.perfilImg} src={headerPerfil} alt="Entrar no Perfil" />
                    </a>
                    <a href="">
                        <img className={styles.coracaoImg} src={headerCoracao} alt="Ir para os favoritos" />
                    </a>
                </div>
            </div>
            {open && <div className={styles.dropMenu}>
                <button className={styles.botaoPromo}>Promoções</button>
                <button className={styles.botaoRegular}>Home</button>
                <button className={styles.botaoRegular}>Incensos</button>
                <button className={styles.botaoRegular}>Cristais</button>
                <button className={styles.botaoRegular}>Signos</button>
                <button className={styles.botaoRegular}>Cartas</button>
                <button className={styles.botaoRegular}>Artefatos</button>
            </div>}
        </>
    )
}

export default Burger