import { AuthContext } from "./AuthContext";
import React, {useState} from 'react';

type AuthProviderProps = {
    children: any;
}

export default function AuthProvider(props: AuthProviderProps) {

    const [usuario, setUsuario] = useState("");
    const [carrinho, setCarrinho] = useState("");
    const [filtro, setFiltro] = useState("");
    const [contraste, setContraste] = useState(false);
    const [modalLogout, setModalLogout] = useState(false);
    const [qtdItensCarrinho, setQtdItensCarrinho] = useState(0);

    return (
        <AuthContext.Provider value={{usuario, setUsuario, carrinho, setCarrinho, filtro, setFiltro, contraste, setContraste,modalLogout, setModalLogout, qtdItensCarrinho, setQtdItensCarrinho}}>
            {props.children}
        </AuthContext.Provider>
    )
}