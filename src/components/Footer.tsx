import styles from './Footer.module.css'

import footerLogo from '../assets/logoFooter.svg'
import footerTwitter from '../assets/logoTwitter.svg'
import footerInstagram from '../assets/logoInstagram.svg'
import footerFacebook from '../assets/logoFacebook.svg'


export function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <section className={styles.marca}>
                        <img className={styles.logo} src={footerLogo} alt="Logo" />
                        <p>A Esotera é um site de venda de produtos esotéricos desenvolvido em 2022 por um grupo de  alunos do ICMC.</p>
                    </section>
                    <section className={styles.informacoes}>
                        <h1>Informações</h1>
                        <ul>
                            <li>
                                <a href="">Dúvidas Frequentes</a>
                            </li>
                            <li>
                                <a href="">Política de Privacidade</a>
                            </li>
                            <li>
                                <a href="">Fale Conosco</a>
                            </li>
                        </ul>    
                    </section>
                </div>
                <div className={styles.redes}>
                    <a href="">
                        <img className={styles.twitterImg} src={footerTwitter} alt="Ir para o Twiiter de Esotera" />
                    </a>
                    <a href="">
                        <img className={styles.instagramImg} src={footerInstagram} alt="Ir para o Instagram de Esotera" />
                    </a>
                    <a href="">
                        <img className={styles.facebookImg} src={footerFacebook} alt="Ir para o Facebook de Esotera" />
                    </a>
                </div>
            </footer>
        </> 
    )
}