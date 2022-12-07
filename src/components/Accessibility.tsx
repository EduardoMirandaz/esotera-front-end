import styles from './Accessibility.module.css'

import accessFonteAumentar from '../assets/iconeFonte.svg'
import accessContraste from '../assets/iconeContraste.svg'
import accessFonteDiminuir from '../assets/iconeFonteDiminuir.svg'
import { useAuthContext } from '../contexts/auth/AuthContext';

export function Accessibility(){
    const { contraste, setContraste } = useAuthContext();

    return(
        <div className={styles.containerAccessibility}>
            <div className={styles.accessibility} id={contraste && styles.dark}>
                <img className={styles.tamFonte} src={accessFonteAumentar} alt="Aumentar a fonte" />
                <hr className={styles.linha}/>
                <img className={styles.tamFonte} src={accessFonteDiminuir} alt="Diminuir a fonte" />
                <hr className={styles.linha}/>
                <img className={styles.contraste} src={accessContraste} onClick={()=>setContraste(!contraste)} alt="Mudar o modo de contraste" />
            </div>
        </div>
    )
}