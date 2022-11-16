import styles from './Accessibility.module.css'

import accessFonte from '../assets/iconeFonte.svg'
import accessContraste from '../assets/iconeContraste.svg'

export function Accessibility(){
    return(
        <div className={styles.containerAccessibility}>
            <div className={styles.accessibility}>
                <img className={styles.tamFonte} src={accessFonte} alt="Aumentar a fonte" />
                <hr className={styles.linha}/>
                <img className={styles.contraste} src={accessContraste} alt="Aumentar o contraste" />
            </div>
        </div>
    )
}