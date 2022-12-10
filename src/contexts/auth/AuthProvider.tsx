import { AuthContext } from "./AuthContext";
import React, {useState} from 'react';

type AuthProviderProps = {
    children: any;
}

export default function AuthProvider(props: AuthProviderProps) {

    const [usuario, setUsuario] = useState("");
    const [carrinho, setCarrinho] = useState("");
    const [filtro, setFiltro] = useState("");
    const [busca, setBusca] = useState("");
    const [contraste, setContraste] = useState(false);
    const [modalLogout, setModalLogout] = useState(false);
    const [canFinalizar, setCanFinalizar] = useState(false);
    const [qtdItensCarrinho, setQtdItensCarrinho] = useState(0);

    const getCarrinhoList = () => {
        const carrinhoJSON = localStorage.getItem("carrinho");
        const carrinhoList = JSON.parse(carrinhoJSON);
        if(carrinhoList == null){
          return [];
        }
        else{
          return carrinhoList;
        }
      }


    return (
        <AuthContext.Provider value={{usuario, setUsuario, carrinho, setCarrinho, filtro, setFiltro, busca, setBusca, contraste, setContraste,modalLogout, setModalLogout, qtdItensCarrinho, setQtdItensCarrinho, getCarrinhoList, canFinalizar, setCanFinalizar}}>
            {props.children}
        </AuthContext.Provider>
    )
}