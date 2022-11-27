import styles from './Accessibility.module.css'

import accessFonteAumentar from '../assets/iconeFonte.svg'
import accessContraste from '../assets/iconeContraste.svg'
import accessFonteDiminuir from '../assets/iconeFonteDiminuir.svg'

export function Accessibility(){
    return(
        <div className={styles.containerAccessibility}>
            <div className={styles.accessibility}>
                <img className={styles.tamFonte} src={accessFonteAumentar} alt="Aumentar a fonte" />
                <hr className={styles.linha}/>
                <img className={styles.tamFonte} src={accessFonteDiminuir} alt="Diminuir a fonte" />
                <hr className={styles.linha}/>
                <img className={styles.contraste} src={accessContraste} alt="Aumentar o contraste" />
            </div>
        </div>
    )
}