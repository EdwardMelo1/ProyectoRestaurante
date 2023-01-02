import { useState } from 'react';
import './Navbar.css';

import logo from "../../Vistas/imagenes/img/Logo.png";
import {
    Link
} from "react-router-dom";

const Cabecera = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="Cabecera">
            <h1 className="Cabecera-h1">
                <img src= {logo} alt="logo fogones del rincon" />
            </h1>

            <button
                onClick={toggleMenu}
                className="Cabecera-button">
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                
                <ul className="Cabecera-ul">
                    <div className='change'>
                
                    <Link to="/" className='rr'>
                        <li className="Cabecera-li"> <button href="#" className="Cabecera-a">Inicio</button>  </li>
                    </Link>

                    </div>
                    <div className='change'>

                    <Link to="/categories">  
                        <li className="Cabecera-li"><button href="#" className="Cabecera-a">Categorias</button></li>
                    </Link>

                    </div>
                
                </ul> 
                
            </nav>

        </header>
    )
}

export default Cabecera