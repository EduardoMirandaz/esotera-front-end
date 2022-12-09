import React from 'react'
import styles from './Pagamento.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';

import pagPix from '../assets/logosPagamento/logoPix.svg'
import pagMastercard from '../assets/logosPagamento/logoMastercard.svg'
import pagPayPal from '../assets/logosPagamento/logoPayPal.svg'
import pagVisa from '../assets/logosPagamento/logoVisa.svg'
import pagApplePay from '../assets/logosPagamento/logoApplePay.svg'
import pagApplePayBranco from '../assets/logosPagamento/logoApplePayBranco.svg'
import pagBitcoin from '../assets/logosPagamento/logoBitcoin.svg'
import pagPicPay from '../assets/logosPagamento/logoPicPay.svg'
import pagEtherium from '../assets/logosPagamento/logoEtherium.svg'
import pagSodexo from '../assets/logosPagamento/logoSodexo.svg'
import pagGooglePay from '../assets/logosPagamento/logoGooglePay.svg'
import pagGooglePayBranco from '../assets/logosPagamento/logoGooglePayBranco.svg'


export function Pagamento(){
    const { contraste } = useAuthContext();
    
    return(
        <div className={styles.containerPagamento} id={contraste && styles.contraste}>
            <div className={styles.pagamento}>
                <form>
                    <label htmlFor="pix">
                        <input type="radio" id='pix' className="pix" value="pix" name="formaPagamento"/>
                        <img className={styles.tamFonte} src={pagPix} alt="Pagar pelo Pix" />
                    </label>
                    <label htmlFor="mastercard">
                        <input type="radio" id='mastercard' className="mastercard" value="mastercard" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagMastercard} alt="Pagar pelo Mastercard" />
                    </label>
                    <label htmlFor="paypal">
                        <input type="radio" id='paypal' className="paypal" value="paypal" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagPayPal} alt="Pagar pelo PayPal" />
                    </label>
                    <label htmlFor="visa">
                        <input type="radio" id='visa' className="visa" value="visa" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagVisa} alt="Pagar pelo Visa" />
                    </label>
                    {!contraste && <label htmlFor="applePay">
                        <input type="radio" id='applePay' className="applePay" value="applePay" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagApplePay} alt="Pagar pelo ApplePay" />
                    </label>}
                    {contraste && <label htmlFor="applePay">
                        <input type="radio" id='applePay' className="applePay" value="applePay" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagApplePayBranco} alt="Pagar pelo ApplePay" />
                    </label>}
                    <label htmlFor="bitcoin">
                        <input type="radio" id='bitcoin' className="bitcoin" value="bitcoin" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagBitcoin} alt="Pagar pelo Bitcoin" />
                    </label>
                    <label htmlFor="picPay">
                        <input type="radio" id='picPay' className="picPay" value="picPay" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagPicPay} alt="Pagar pelo PicPay" />
                    </label>
                    <label htmlFor="etherium">
                        <input type="radio" id='etherium' className="etherium" value="etherium" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagEtherium} alt="Pagar pelo Etherium" />
                    </label>
                    <label htmlFor="sodexo">
                        <input type="radio" id='sodexo' className="sodexo" value="sodexo" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagSodexo} alt="Pagar pelo Sodexo" />
                    </label>
                    {!contraste && <label htmlFor="googlePay">
                        <input type="radio" id='googlePay' className="googlePay" value="googlePay" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagGooglePay} alt="Pagar pelo GooglePay" />
                    </label>}
                    {contraste && <label htmlFor="googlePay">
                        <input type="radio" id='googlePay' className="googlePay" value="googlePay" name="formaPagamento"/>
                        <img className={styles.contraste} src={pagGooglePayBranco} alt="Pagar pelo GooglePay" />
                    </label>}
                </form> 
            </div>
        </div>
    )
}