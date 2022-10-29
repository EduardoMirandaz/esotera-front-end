import styles from './Footer.module.css'

import headerLogo from '../assets/logo.svg'
import headerLupa from '../assets/lupa.svg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'


export function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <img className={styles.logo} src={headerLogo} alt="Logo" />
            </footer>
        </>
    )
}