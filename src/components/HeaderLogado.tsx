import styles from './HeaderLogado.module.css'
import React, {useState, useEffect} from 'react';
import headerLogo from '../assets/logo.svg'
import headerLupa from '../assets/lupa.svg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import NavButtons from './NavButtons'
import BurgerLogado from './BurgerLogado'
import Login from './Login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Carrinho } from '../pages/Carrinho';
import { PrincipalLogado } from '../pages/PrincipalLogado';

export function HeaderLogado(){
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }

      useEffect(() => {
        window.addEventListener("resize", handleResize)
      })

      const navigate = useNavigate();

      const navigateToCarrinho = () => {
        navigate('/Carrinho');
      };

      const navigateToPrincipalLogado = () => {
        navigate('/PrincipalLogado');
      };
      
    return(
        <>
        
                {!isMobile &&  <header className={styles.header}>
                <div className={styles.topHeader}>
                    <img onClick={navigateToPrincipalLogado} className={styles.logo} src={headerLogo} alt="Logo" />
                    <div className={styles.funcoes}>
                        <div className={styles.pesquisa}>
                            <input type="text" placeholder="Pesquisar"/>
                            <a href="">
                                <img src={headerLupa} alt="Buscar item" />
                            </a>
                        </div>
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
                </div>
            
                <NavButtons className={styles.navButtons}/>
                <Login showModal={showModal} setShowModal={setShowModal} />
            </header> }
            {isMobile && <BurgerLogado className={styles.burger}/>}
            <Routes>
                <Route path="/Carrinho" element={<Carrinho />} />
                <Route path="/PrincipalLogado" element={<PrincipalLogado />} />
            </Routes>
            </>
        
    )
}