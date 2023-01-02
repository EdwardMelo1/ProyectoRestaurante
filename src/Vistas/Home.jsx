import React from 'react'
import Foter from './footer/Foter'
import Main from "./Main/Main"
import Navbar from"../Componentes/Navbar/Navbar"
const Home = () => {
return (  /* se importan coponentes para la pagina de inicio  */
    <>
    <Navbar/>
    <Main/>
    <Foter/>
    </>
)
}

export default Home