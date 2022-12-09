import React, { useState } from 'react'
import styles from './FormularioFinalizacaoCompra.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';

export function FormularioFinalizacaoCompra(){

    const { contraste, setCanFinalizar } = useAuthContext();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");

    function verificaCanFinalizar(){
        if(nome && cpf && cidade && estado && logradouro && numero && cep && complemento){
            setCanFinalizar(true)
        }
        else{
            setCanFinalizar(false)
        }
    }

    return(
        <div className={styles.containerFormulario} id={contraste && styles.contraste}>
            <form className={styles.formulario}>

                <fieldset className={styles.dadosPessoais}>
                    <legend>Dados Pessoais</legend>
                    <input type="text" id="nomeCompleto" name="nomeCompleto" placeholder="Nome Completo" aria-required="true" required onChange={(e)=>{setNome(e.target.value); verificaCanFinalizar()}}/>
                    <input type="text" id="cpf" name="cpf" placeholder="CPF (ex: 111.111.111-11)" aria-label='Digite seu CPF' aria-placeholder='XXX.XXX.XXX-XX' aria-required="true" required onChange={(e)=>{setCpf(e.target.value); verificaCanFinalizar()}}/>
                </fieldset>

                <fieldset className={styles.enderecoEntrega}>
                    <legend>Endereço de Entrega</legend>
                    <input type="text" id={styles.cidade} name="cidade" placeholder="Cidade" aria-required="true" required onChange={(e)=>{setCidade(e.target.value); verificaCanFinalizar()}}/>
                    <input type="text" id={styles.estado} name="estado" placeholder="Estado" aria-required="true" required onChange={(e)=>{setEstado(e.target.value); verificaCanFinalizar()}}/>
                    <input type="text" id={styles.logradouro} name="logradouro" placeholder="Logradouro" aria-required="true" required onChange={(e)=>{setLogradouro(e.target.value); verificaCanFinalizar()}}/>
                    <input type="text" id={styles.numero} name="numero" placeholder="Número" aria-required="true" required onChange={(e)=>{setNumero(e.target.value); verificaCanFinalizar()}}/>
                    <input type="text" id={styles.cep} name="cep" placeholder="CEP (ex: 11111-111)" aria-label='Digite seu CEP' aria-placeholder='XXXXX-XXX' aria-required="true" required onChange={(e)=>{setCep(e.target.value); verificaCanFinalizar()}}/>
                    <input type="text" id={styles.complemento} name="complemento" placeholder="Complemento" aria-required="true" required onChange={(e)=>{setComplemento(e.target.value); verificaCanFinalizar()}}/>
                </fieldset> 

            </form>
        </div>
    )
}