import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    useParams 
} from "react-router-dom";

import Home from './pages/Home'
import Repositorio from './pages/Repositorio'
import Header from './components/Header'
import Footer from './components/Footer'

export default function AppRoutes() {

    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/repositorio/:repositorio" element={<Repositorio />} />
            </Routes>
            <Footer />
        </Router>
    )
}