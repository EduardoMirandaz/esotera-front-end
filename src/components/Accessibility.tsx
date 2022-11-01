import styles from './Accessibility.module.css'

import accessFonte from '../assets/iconeFonte.svg'
import accessContraste from '../assets/iconeContraste.svg'

export function Accessibility(){
    return(
        <>
            <div className={styles.accessibility}>
                <img className={styles.tamFonte} src={accessFonte} alt="Ir para o Twiiter de Esotera" />
                <hr className={styles.linha}/>
                <img className={styles.contraste} src={accessContraste} alt="Ir para o Instagram de Esotera" />
            </div>
        </>
    )
}