import styles from './BurgerLogado.module.css';
import React, {useState} from 'react';
import {CgMenu, CgClose} from 'react-icons/cg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import headerLogo from '../assets/logo.svg'
import Login from './Login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Carrinho } from '../pages/Carrinho';
import { PrincipalLogado } from '../pages/PrincipalLogado';

export function BurgerLogado(){
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const closeIcon = <CgClose className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const navigate = useNavigate();

      const navigateToCarrinho = () => {
        navigate('/Carrinho');
      };
      const navigateToPrincipalLogado = () => {
        navigate('/PrincipalLogado');
      };
    return(
        <>
            <div className={styles.burgerBar}>
                <div className={styles.burgerContainer}>
                    {open ? closeIcon : hamburgerIcon}
                </div>
                <img className={styles.logo} src={headerLogo} alt="Logo" />
                <div className={styles.icones}>
                    <div className={styles.carrinho} onClick={navigateToCarrinho}>
                        <img className={styles.carrinhoImg} src={headerCarrinho} alt="Ir para o carrinho" />
                    </div>
                    <div className={styles.usuario}>
                        <img  onClick={openModal} className={styles.perfilImg} src={headerPerfil} alt="Entrar no Perfil" />
                        <div className={styles.nomeUsuario}><a href="" >Hugo</a></div>
                    </div>
                    <a href="">
                        <img className={styles.coracaoImg} src={headerCoracao} alt="Ir para os favoritos" />
                    </a>
                </div>
            </div>
            {open && <div className={styles.dropMenu}>
                <button className={styles.botaoPromo}>Promoções</button>
                <button className={styles.botaoRegular} onClick={navigateToPrincipalLogado}>Página Inicial</button>
                <button className={styles.botaoRegular}>Incensos</button>
                <button className={styles.botaoRegular}>Cristais</button>
                <button className={styles.botaoRegular}>Signos</button>
                <button className={styles.botaoRegular}>Cartas</button>
                <button className={styles.botaoRegular}>Artefatos</button>
            </div>}
            <Login showModal={showModal} setShowModal={setShowModal} />
            <Routes>
                <Route path="/Carrinho" element={<Carrinho />} />
                <Route path="/PrincipalLogado" element={<PrincipalLogado />} />
            </Routes>
        </>
    )
}

export default BurgerLogado