import styles from './NavButtons.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';
import { useState } from 'react';

export function NavButtons(){

    const { setFiltro } = useAuthContext();
    const [selecionado,setSelecionado] = useState(1);

    function setButton(label, value){
        setFiltro(label)
        setSelecionado(value)
    }

    return(
        <div className={styles.botoes}>
            {
                (selecionado == 0) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("promocao",0)}>Promoções</button>
            }
            {
                (selecionado != 0) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("promocao",0)}>Promoções</button>
            }
            {
                (selecionado == 1) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("",1)}>Página Inicial</button>
            }
            {
                (selecionado != 1) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("",1)}>Página Inicial</button>
            }
            {
                (selecionado == 2) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("Incensos",2)}>Incensos</button>
            }
            {
                (selecionado != 2) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("Incensos",2)}>Incensos</button>
            }
            {
                (selecionado == 3) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("Cristais",3)}>Cristais</button>
            }
            {
                (selecionado != 3) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("Cristais",3)}>Cristais</button>
            }
            {
                (selecionado == 4) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("Signos",4)}>Signos</button>
            }
            {
                (selecionado != 4) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("Signos",4)}>Signos</button>
            }
            {
                (selecionado == 5) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("Cartas",5)}>Cartas</button>
            }
            {
                (selecionado != 5) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("Cartas",5)}>Cartas</button>
            }
            {
                (selecionado == 6) &&
                <button className={styles.botaoPromo} onClick={()=>setButton("Artefatos",6)}>Artefatos</button>
            }
            {
                (selecionado != 6) &&
                <button className={styles.botaoRegular} onClick={()=>setButton("Artefatos",6)}>Artefatos</button>
            }
        </div>
    )
}
export default NavButtons