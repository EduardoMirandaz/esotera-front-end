import styles from './NavButtons.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';
import { useState } from 'react';

export function NavButtons(){

    const { setFiltro, contraste } = useAuthContext();
    const [selecionado,setSelecionado] = useState(1);

    function setButton(label, value){
        setFiltro(label)
        setSelecionado(value)
    }

    return(
        <div id={contraste && styles.contraste} className={styles.botoes}>
            {
                (selecionado == 0) &&
                <button id={contraste && styles.contraste} className={styles.botaoPromoSelecionado} onClick={()=>setButton("Promoções",0)}>Promoções</button>
            }
            {
                (selecionado != 0) &&
                <button id={contraste && styles.contraste} className={styles.botaoPromo} onClick={()=>setButton("Promoções",0)}>Promoções</button>
            }
            {
                (selecionado == 1) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("",1)}>Página Inicial</button>
            }
            {
                (selecionado != 1) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("",1)}>Página Inicial</button>
            }
            {
                (selecionado == 2) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Incensos",2)}>Incensos</button>
            }
            {
                (selecionado != 2) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Incensos",2)}>Incensos</button>
            }
            {
                (selecionado == 3) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Cristais",3)}>Cristais</button>
            }
            {
                (selecionado != 3) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Cristais",3)}>Cristais</button>
            }
            {
                (selecionado == 4) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Signos",4)}>Signos</button>
            }
            {
                (selecionado != 4) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Signos",4)}>Signos</button>
            }
            {
                (selecionado == 5) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Cartas",5)}>Cartas</button>
            }
            {
                (selecionado != 5) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Cartas",5)}>Cartas</button>
            }
            {
                (selecionado == 6) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Artefatos",6)}>Artefatos</button>
            }
            {
                (selecionado != 6) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Artefatos",6)}>Artefatos</button>
            }
        </div>
    )
}
export default NavButtons