import React from "react";
import "./categories.css"
import bigpicada from "../Img/Picadagrande.jpg"
import lunch from "../Img/Almuerzo.jpg"
import drinks from "../Img/cerveza.jpg"
import {
    Link
} from "react-router-dom";

function categories(){
    return(
    <>
    <div className="container-categories">
        <div className="pict">
            <img src={bigpicada} alt="picada" />
            <h2> Picada llanera: <hr />- Papa, yuca, platano, carne</h2>
            <h2>Picada completa: <hr />- Carne, papa criolla, papa blanca, yuca, longaniza, rellena, platano</h2>

            <div className="Info">
                <Link to="/categories"> 
                <button className="Infopicada"> Comprar Picadas </button>
                </Link>
            
            </div>
        </div>


        <div className="pict">
            <img src={lunch} alt="Corrientazo" />
            
            <h2> Corrienzato: <hr />- Almuerzo tipico colombiano, Cada dia un menu diferente </h2>
            <div className="Info">
                <Link to="/categories"> 
                <button className="Infopicada">Comprar Corrientazos</button>
                </Link>
            </div>
        </div>

        <div className="pict">
            <img src={drinks} alt="bebida" />
            
            <h2> Bebidas: <hr />- Todas los tipos de cervezas, todos los tipos de jugos </h2>
            <div className="Info">
                
                <Link to="/categories"> 
                <button className="Infopicada"> Comprar Bebidas</button>
                </Link>
            </div>
        </div>
    </div>
    </>
    )
}
export default categories;