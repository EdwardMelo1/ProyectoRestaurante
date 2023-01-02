import React from "react";
import "./Foter.css"
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
/* import Whastapp from "./whastapp" */




function foter(){   /* esto pinta el footer  */
    return(
    <>
        <div className="contenedor_foter">
            <div className="foter">
                <div className="contact">
                    <h2>Contacto</h2>
                    <h3>323 71 25 188</h3>
                    
                </div>

                <div className="schedule"> {/* los horarios del restaurante */}
                    <h2>Horarios:</h2>
                    <h3>Lunes a viernes | 11:00am a 4:00pm</h3>
                    <h3>Sábado a Domingo | 11:00am a 4:00pm</h3>
                </div>
                <div className="Information">
                <h3 >Bienvenidos nosotros somos fogonés del rincón, un restaurante que se encarga de ofrecer las mejores picadas y almuerzos que podrás encontrar en todo suba, con una gran variedad de alimentos. ¡Te esperamos!</h3>
                </div>
            </div>  
            <hr />
            <div className="redes">{/* no tiene funcionalidad solo decoracion por el momento  */}
                <AiFillInstagram className="FooterInstagram"/>
                <AiFillFacebook className="FooterInstagram"/>
                <AiFillTwitterCircle className="FooterInstagram"/>
            </div>
            
        </div>
        {/* <Whastapp/> */}
    </>
    )
}
export default foter;