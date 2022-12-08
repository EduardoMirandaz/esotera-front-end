import React from 'react'
import styles from './FormularioFinalizacaoCompra.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';

export function FormularioFinalizacaoCompra(){

    const { contraste } = useAuthContext();
    return(
        <div className={styles.containerFormulario} id={contraste && styles.contraste}>
            <form className={styles.formulario}>

                <fieldset className={styles.dadosPessoais}>
                    <legend>Dados Pessoais</legend>
                    <input type="text" id="nomeCompleto" name="nomeCompleto" placeholder="Nome Completo" required/>
                    <input type="text" id="cpf" name="cpf" placeholder="CPF" required/>
                </fieldset>

                <fieldset className={styles.enderecoEntrega}>
                    <legend>Endereço de Entrega</legend>
                    <input type="text" id={styles.cidade} name="cidade" placeholder="Cidade" required/>
                    <input type="text" id={styles.estado} name="estado" placeholder="Estado" required/>
                    <input type="text" id={styles.logradouro} name="logradouro" placeholder="Logradouro" required/>
                    <input type="text" id={styles.numero} name="numero" placeholder="Número" required/>
                    <input type="text" id={styles.cep} name="cep" placeholder="CEP" required/>
                    <input type="text" id={styles.complemento} name="complemento" placeholder="Complemento" required/>
                </fieldset> 

            </form>
        </div>
    )
}