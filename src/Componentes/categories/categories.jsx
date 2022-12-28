import React from "react";
import "./categories.css"
import bigpicada from "../Img/Picadagrande.jpg"
import lunch from "../Img/Almuerzo.jpg"
import drinks from "../Img/cerveza.jpg"

function categories(){
    return(
    <>
    <div className="container-categories">
        <div className="pict">
            <img src={bigpicada} alt="picada" />
            

            <div className="Info">
                <button className="Infopicada"> Picadas</button>
            </div>
        </div>


        <div className="pict">
            <img src={lunch} alt="Corrientazo" />
            

            <div className="Info">
                <button className="Infopicada"> Corrientazos</button>
            </div>
        </div>

        <div className="pict">
            <img src={drinks} alt="bebida" />
            

            <div className="Info">
                <button className="Infopicada"> Bebidas</button>
            </div>
        </div>
    </div>
    </>
    )
}
export default categories;