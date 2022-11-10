import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="logotitulo">
                <h1 className="lucero">Lucero Mates</h1>
            </div>
            <div>
                <Link to="/">Item List Container</Link>
                <Link to="/BodyPrincipal">Body Principal</Link>
                <Link to="/categoria/Mates">Mates</Link>
                <Link to="/categoria/Termos">Termos</Link>
                <Link to="/categoria/Bombillas">Bombillas</Link>
            </div>
        </nav>
    )
}
