import React from "react";
import { Principal } from "./pages/Principal";
import { Produto } from "./pages/Produto";
import {carrosseis,cards} from "./data.json"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal carrosseis={carrosseis} cards={cards}/>}/>
                <Route path="/produto" element={<Produto/>}/>
            </Routes>
        </Router>
    );
}

export default App;