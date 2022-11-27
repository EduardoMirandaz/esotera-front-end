import styles from './NavButtons.module.css'

export function NavButtons(){
    return(
        <>
            <div className={styles.botoes}>
                <button className={styles.botaoPromo}>Promoções</button>
                <button className={styles.botaoRegular}>Página Inicial</button>
                <button className={styles.botaoRegular}>Incensos</button>
                <button className={styles.botaoRegular}>Cristais</button>
                <button className={styles.botaoRegular}>Signos</button>
                <button className={styles.botaoRegular}>Cartas</button>
                <button className={styles.botaoRegular}>Artefatos</button>
            </div>
        </>
    )
}

export default NavButtons