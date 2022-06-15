import React from 'react'
// import Tela1 from ''
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from './pages/Tela1';

const Rota = () => {
    <BrowserRouter>
        <Routes>
            <Route path='/tela1' element={<Tela1 />} />
        </Routes>
    </BrowserRouter>
}

export default Rota;