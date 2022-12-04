import React from "react";
import { Principal } from "./pages/Principal";
import { PrincipalLogado } from "./pages/PrincipalLogado";
import { Produto } from "./pages/Produto";
import { Carrinho } from "./pages/Carrinho"
import {carrosseis,produto,filtro} from "./data.json"
import VLibras from "@djpfs/react-vlibras";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal carrosseis={carrosseis} produto={produto} filtro={filtro}/>}/>
                <Route path="/principallogado" element={<PrincipalLogado carrosseis={carrosseis} produto={produto}/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/carrinho" element={<Carrinho produto={produto}/>}/>
            </Routes>
            <VLibras forceOnload={true}/>
        </Router>
    );
}

export default App;