import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';
import headerLogo from '../assets/logo.svg'
import headerLupa from '../assets/lupa.svg'
import headerLupaContraste from '../assets/lupaContraste.svg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import NavButtons from './NavButtons'
import Login from './Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import MenuLogout from './MenuLogout';
import {CgMenu, CgClose} from 'react-icons/cg'

export function Header(props) {
    const isPrincipal = props.isPrincipal;
    const [showModal, setShowModal] = useState(false)
    const [nome, setNome] = useState("");

    const { modalLogout, setModalLogout } = useAuthContext();

    const openModalLogin = () => {
        setShowModal(prev => !prev)
    }

    const openModalLogout = () => {
        setModalLogout(modalLogout => !modalLogout);
    }


    const { contraste } = useAuthContext();

    const navigate = useNavigate();

    const navigateToPrincipal = () => {
        navigate('/');
    };

    const navigateToCarrinho = () => {
        navigate('/carrinho');
    };

    const [open, setOpen] = useState(false);
    const closeIcon = <CgClose className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const hamburgerIcon = <CgMenu className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    
    useEffect(() => {
        setNome(localStorage.getItem("username")?.split(" ")[0]);
    })
    
    const carrinho = [
        {},
        {},
        {}
    ]

    return (
        <>
            <header className={styles.header}>
                <div className={styles.topHeader} id={contraste && styles.contraste}>
                    <div className={styles.burgerContainer}>
                        {open ? closeIcon : hamburgerIcon}
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
                    <img onClick={navigateToPrincipal} className={styles.logo} src={headerLogo} alt="Logo" />
                    <div className={styles.funcoes}>
                        {
                            contraste &&
                            <div className={styles.pesquisa} id={contraste && styles.contraste}>
                                <input className={styles.input} type="text" placeholder="Pesquisar" id={contraste && styles.contraste} />
                                <img src={headerLupaContraste} alt="Buscar item" />
                            </div>
                        }
                        {
                            !contraste &&
                            <div className={styles.pesquisa} id={contraste && styles.contraste}>
                                <input className={styles.input} type="text" placeholder="Pesquisar" id={contraste && styles.contraste} />
                                <img src={headerLupa} alt="Buscar item" />
                            </div>
                        }

                        <div className={styles.icones}>
                            <div onClick={
                                nome ? navigateToCarrinho : openModalLogin
                                } className={styles.carrinho}>
                                <img className={styles.carrinhoImg} src={headerCarrinho} alt="Ir para o carrinho" />
                                <div className={styles.quantidade} id={contraste && styles.contraste}>{carrinho.length}</div>
                            </div>
                            <img onClick={nome ? openModalLogout : openModalLogin} className={styles.perfilImg} src={headerPerfil} alt="Entrar no Perfil" />
                            {
                                modalLogout && <MenuLogout/>
                            }
                            {
                                nome && <div className={styles.nomeUsuario}>{nome}</div>
                            }
                            <a href="">
                                <img className={styles.coracaoImg} src={headerCoracao} alt="Ir para os favoritos" />
                            </a>
                        </div>
                    </div>
                </div>
                {isPrincipal &&
                    <div className={styles.navButtons}>
                        <NavButtons/>
                    </div>
                }
                <Login showModal={showModal} setShowModal={setShowModal} />
            </header>
        </>
    )

}