import styles from './Header.module.css'
import React, {useState, useEffect} from 'react';
import headerLogo from '../assets/logo.svg'
import headerLupa from '../assets/lupa.svg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'
import NavButtons from './NavButtons'
import Burger from './Burger'
import Login from './Login';



export function Header(){
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
    return(
        <>
        
                {!isMobile &&  <header className={styles.header}>
                <div className={styles.topHeader}>
                    <img className={styles.logo} src={headerLogo} alt="Logo" />
                    <div className={styles.funcoes}>
                        <div className={styles.pesquisa}>
                            <input type="text" placeholder="Pesquisar"/>
                            <a href="">
                                <img src={headerLupa} alt="Buscar item" />
                            </a>
                        </div>
                        <div className={styles.icones}>
                            <a href="">
                                <div className={styles.carrinho}>
                                    <img className={styles.carrinhoImg} src={headerCarrinho} alt="Ir para o carrinho" />
                                    <div></div>
                                </div>
                            </a>
                            <img  onClick={openModal} className={styles.perfilImg} src={headerPerfil} alt="Entrar no Perfil" />
                            <a href="">
                                <img className={styles.coracaoImg} src={headerCoracao} alt="Ir para os favoritos" />
                            </a>
                        </div>
                    </div>
                </div>
            
                <NavButtons className={styles.navButtons}/>
                <Login showModal={showModal} setShowModal={setShowModal} />
            </header> }
            {isMobile && <Burger className={styles.burger}/>}
            </>
        
    )
}