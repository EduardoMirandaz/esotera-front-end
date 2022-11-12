import React from "react";
import { Principal } from "./pages/Principal";
import { Produto } from "./pages/Produto";
import { Carrinho } from "./pages/Carrinho"
import {carrosseis,cards} from "./data.json"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal carrosseis={carrosseis} cards={cards}/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
        </Router>
    );
}

export default App;