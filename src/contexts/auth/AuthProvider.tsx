import { AuthContext } from "./AuthContext";
import React, {useState} from 'react';

type AuthProviderProps = {
    children: any;
}

export default function AuthProvider(props: AuthProviderProps) {

    const [usuario, setUsuario] = useState("");
    const [carrinho, setCarrinho] = useState("");

    return (
        <AuthContext.Provider value={{usuario, setUsuario, carrinho, setCarrinho}}>
            {props.children}
        </AuthContext.Provider>
    )
}