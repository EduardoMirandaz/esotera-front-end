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
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import MenuLogout from './MenuLogout';
import {CgMenu, CgClose} from 'react-icons/cg'
import { ModalPrecisaLogar } from '../components/ModalPrecisaLogar';

export function Header(props) {
    const isPrincipal = props.isPrincipal;
    const [showModal, setShowModal] = useState(false)
    const [nome, setNome] = useState("");

    const { modalLogout, setModalLogout, qtdItensCarrinho, setQtdItensCarrinho } = useAuthContext();

    const openModalLogin = () => {
        setShowModal(prev => !prev)
    }

    const [showModalPrecisaLogar, setShowModalPrecisaLogar] = useState(false);

    const precisaLogar = () => {setShowModalPrecisaLogar(prev => !prev)};

    const changeStateModalLogout = () => {
        setModalLogout(modalLogout => !modalLogout);
    }


    const { contraste, setFiltro, setBusca } = useAuthContext();

    const navigate = useNavigate();

    const navigateToPrincipal = () => {
        navigate('/');
    };

    const navigateToCarrinho = () => {
        setModalLogout(false);
        navigate('/carrinho');
    };

    const [open, setOpen] = useState(false);
    const [buscaLocal, setBuscaLocal] = useState("");
    const closeIcon = <CgClose className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const hamburgerIcon = <CgMenu className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    
    useEffect(() => {
        setNome(localStorage.getItem("username")?.split(" ")[0]);
        const qtd = JSON.parse(localStorage.getItem("carrinho"))?.length
        if(qtd == null){
            setQtdItensCarrinho(0)
        }
        else{
            setQtdItensCarrinho(qtd)
        }
    })

    function buscar(){
        setBusca(buscaLocal)
        setFiltro("")
        navigate('/');
    }
    
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-140px";
        }
        prevScrollpos = currentScrollPos;
    }

    

    return (
        <>
            <header className={styles.header} id={"header"}>
                <div className={styles.topHeader} id={contraste && styles.contraste}>
                    <div className={styles.burgerContainer}>
                        {open ? closeIcon : hamburgerIcon}
                    </div>
                    {open && <div className={styles.dropMenu} id={contraste && styles.contraste}>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("Promoções");setOpen(false)}}>Promoções</button>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("");setOpen(false)}}>Página Inicial</button>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("Incensos");setOpen(false)}} >Incensos</button>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("Cristais");setOpen(false)}} >Cristais</button>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("Signos");setOpen(false)}} >Signos</button>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("Cartas");setOpen(false)}} >Cartas</button>
                        <button className={styles.botaoRegular} onClick={()=>{setFiltro("Artefatos");setOpen(false)}} >Artefatos</button>
                    </div>}
                    <img onClick={navigateToPrincipal} className={styles.logo} src={headerLogo} alt="Logo" />
                    <div className={styles.funcoes}>
                        <form onSubmit={(event) => {event.preventDefault();buscar()}}
                         className={styles.pesquisa} id={contraste && styles.contraste}>
                            <input className={styles.input} type="text" placeholder="Pesquisar" id={contraste && styles.contraste} onChange={(e)=> {setBuscaLocal(e.target.value);buscar()}}/>
                            
                            {
                                contraste &&                
                                <img className={styles.busca} src={headerLupaContraste} alt="Buscar item" onClick={()=>buscar()}/>
                            }
                            {
                                !contraste &&
                                <img className={styles.busca} src={headerLupa} alt="Buscar item" onClick={()=>buscar()} />
                            }
                            
                        </form>
                    
                        <div className={styles.icones}>
                            <div onClick={
                                nome ? navigateToCarrinho : precisaLogar
                                } className={styles.carrinho}>
                                <img className={styles.carrinhoImg} src={headerCarrinho} alt="Ir para o carrinho" />
                                <div className={styles.quantidade} id={contraste && styles.contraste}>{qtdItensCarrinho}</div>
                            </div>
                            <img onClick={nome ? changeStateModalLogout : openModalLogin} className={styles.perfilImg} src={headerPerfil} alt={modalLogout ? "Você está autenticado em sua conta" : "Entrar no Perfil" } />
                            {
                                modalLogout && <MenuLogout/>
                            }
                            {
                                nome && <div className={styles.nomeUsuario}>{nome}</div>
                            }
                            <a href="#">
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
                <ModalPrecisaLogar showModal={showModalPrecisaLogar} setShowModal={setShowModalPrecisaLogar} />
            </header>
        </>
    )

}