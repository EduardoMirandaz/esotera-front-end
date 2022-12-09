import styles from './Accessibility.module.css'

import accessFonteAumentar from '../assets/iconeFonte.svg'
import accessContraste from '../assets/iconeContraste.svg'
import accessFonteDiminuir from '../assets/iconeFonteDiminuir.svg'
import { useAuthContext } from '../contexts/auth/AuthContext';


export function Accessibility(){
    const { contraste, setContraste } = useAuthContext();
    
    const aumentarFonte = () => {
        var tamanho = document.querySelector(':root').style.fontSize; 
        document.querySelector(':root').style.fontSize = 
            (tamanho < "18px") ?  "18px" : "22px";
    }

    const diminuirFonte = () => {
        var tamanho = document.querySelector(':root').style.fontSize; 
        document.querySelector(':root').style.fontSize = 
            (tamanho <= "18px") ?  "16px" : "18px";  
    }

    return(
        <div className={styles.containerAccessibility}>
            <div className={styles.accessibility} id={contraste && styles.contraste}>
                <img onClick={aumentarFonte} className={styles.tamFonte} src={accessFonteAumentar} alt="Aumentar o tamanho da fonte" />
                <hr className={styles.linha}/>
                <img onClick={diminuirFonte} className={styles.tamFonte} src={accessFonteDiminuir} alt="Diminuir o tamanho da fonte" />
                <hr className={styles.linha}/>
                <img className={styles.contraste} src={accessContraste} onClick={()=>setContraste(!contraste)} alt="Mudar o modo de contraste" />
            </div>
        </div>
    )
}