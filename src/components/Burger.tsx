import styles from './Burger.module.css';
import React, {useState} from 'react';
import {CgMenu, CgClose} from 'react-icons/cg'


export function Burger(){
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    const closeIcon = <CgClose className={styles.burgerIcon} size='26px' color='white' onClick={() =>setOpen(!open)}/>
    return(
        <>
            <div className={styles.burgerBar}>
                <div className={styles.burgerContainer}>
                    {open ? closeIcon : hamburgerIcon}
                </div>
            </div>
            {open && <div className={styles.dropMenu}>
                <button className={styles.botaoPromo}>Promoções</button>
                <button className={styles.botaoRegular}>Home</button>
                <button className={styles.botaoRegular}>Incensos</button>
                <button className={styles.botaoRegular}>Cristais</button>
                <button className={styles.botaoRegular}>Signos</button>
                <button className={styles.botaoRegular}>Cartas</button>
                <button className={styles.botaoRegular}>Artefatos</button>
            </div>}
        </>
    )
}

export default Burger