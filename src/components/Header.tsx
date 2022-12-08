import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';
import headerLogo from '../assets/logo.svg'
import headerLupa from '../assets/lupa.svg'
import headerLupaContraste from '../assets/lupaContraste.svg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import NavButtons from './NavButtons'
import Burger from './Burger'
import Login from './Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import MenuLogout from './MenuLogout';

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


    const { usuario, contraste } = useAuthContext();

    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const navigate = useNavigate();

    const navigateToPrincipal = () => {
        navigate('/');
    };

    const navigateToCarrinho = () => {
        navigate('/carrinho');
    };


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        setNome(localStorage.getItem("username")?.split(" ")[0]);
    })

    return (
        <>
            {!isMobile && <header className={styles.header}>
                <div className={styles.topHeader} id={contraste && styles.contraste}>
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
                    <NavButtons className={styles.navButtons} />
                }
                <Login showModal={showModal} setShowModal={setShowModal} />
            </header>}
            {isMobile && <Burger className={styles.burger} />}
            <Routes>
                <Route path="/"/>
            </Routes>
        </>
    )

}