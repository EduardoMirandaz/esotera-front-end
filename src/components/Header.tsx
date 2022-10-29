import styles from './Header.module.css'

import headerLogo from '../assets/logo.svg'
import headerLupa from '../assets/lupa.svg'
import headerCarrinho from '../assets/carrinho.svg'
import headerPerfil from '../assets/perfil.svg'
import headerCoracao from '../assets/coracao.svg'


export function Header(){
    return(
        <header className={styles.header}>
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
                    <a href="">
                        <img className={styles.perfilImg} src={headerPerfil} alt="Entrar no Perfil" />
                    </a>
                    <a href="">
                        <img className={styles.coracaoImg} src={headerCoracao} alt="Ir para os favoritos" />
                    </a>
                </div>
            </div>
        </header>
    )
}