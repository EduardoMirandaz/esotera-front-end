import styles from './NavButtons.module.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { PrincipalLogado } from '../pages/PrincipalLogado';

export function NavButtons(){
    const navigate = useNavigate();

    const navigateToPrincipalLogado = () => {
        navigate('/PrincipalLogado');
      };
    return(
        <>
            <div className={styles.botoes}>
                <button className={styles.botaoPromo}>Promoções</button>
                <button className={styles.botaoRegular} onClick={navigateToPrincipalLogado}>Página Inicial</button>
                <button className={styles.botaoRegular}>Incensos</button>
                <button className={styles.botaoRegular}>Cristais</button>
                <button className={styles.botaoRegular}>Signos</button>
                <button className={styles.botaoRegular}>Cartas</button>
                <button className={styles.botaoRegular}>Artefatos</button>
            </div>
            <Routes>
                <Route path="/PrincipalLogado" element={<PrincipalLogado />} />
            </Routes>
        </>
    )
}

export default NavButtons