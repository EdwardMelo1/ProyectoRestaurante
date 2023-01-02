import "./Main.css"
import picada from "../imagenes/img/picada.png"
import { ImLocation } from 'react-icons/im';
import Categories from "../../Componentes/categories/categories";
import imgRestaurante from "../imagenes/img/casa.png"

function Main(){/* parte del el inicio  */
    return(
        <>
            <div className="main">
                <img src={picada} alt="picada" />
                    <h1 className="Tittle"><span> Restaurante</span> | Fogonés del rincón</h1>
                <div className="categorie">
                        <h2>Categorias</h2>
                        <Categories/>
                    </div>  
                    <hr/>


                    <div className="location">
                    <ImLocation className="icon-ubi"/>
                    <h1>Estamos ubicados </h1>
                    <img src={imgRestaurante} alt="imagen del local" />
                    <h3>Dirección <hr /> Cra. 94f #131c-98 </h3>
                    </div>

                    
                    
            </div>
        </>
    )
}

export default Main;