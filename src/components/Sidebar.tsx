import {Envelope} from "phosphor-react"

import styles from './Sidebar.module.css'

import jardim from '../assets/jardim.jpg'
import sarita from '../assets/sarita.jpg'


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={jardim}/>
            <div className={styles.profile}>
                <img className={styles.avatar} src={sarita} alt="" />
                <strong className={styles.name}>Sarita Mazzini Bruschi</strong>
                <span>ICMC - USP São Carlos</span>
            </div>
            <div className={styles.email}>
                <Envelope size={20}/>
                <a href="mailto:sarita@icmc.usp.br?subject=D%C3%BAvida%20ou%20sugest%C3%A3o%20do%20site%20de%20recursos%20educacionais&body=Ol%C3%A1%20Sarita%2C%0D%0A%0D%0AVim%20pelo%20site%20de%20recursos%20educacionais%20e%20gostaria%20de...">sarita@icmc.usp.br</a>

            </div> 
            <footer>
                <div className={styles.creator}>
                    <a href="https://github.com/GustavoOM"  target="_blank">desenvolvido por Gustavo Martins</a>
                </div>
            </footer>
        </aside>
    )
}