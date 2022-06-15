import React from 'react'
import './style.scss'
import styles from './styles.module.scss'
import Base from './components/Base'
import Rotas from './routes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tela1 from './pages/Tela1';
import Tela2 from './pages/Tela2';
import { Link } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <nav className={styles.navContainer}>
                <Link to="/">Home</Link>
                <Link to="/tela1">Todo App</Link>
                <Link to="/tela2">Cards</Link>
            </nav>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/tela1" element={<Tela1 />} />
                <Route path="/tela2" element={<Tela2 />} />
            </Routes>
       </BrowserRouter>
    );
}

export default App;
