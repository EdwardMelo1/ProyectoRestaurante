import "./Main.css"
import picada from "../imagenes/img/picada.png"
import { ImLocation } from 'react-icons/im';
import Categories from "../../Componentes/categories/categories";

function Main(){
    return(
        <>
            <div className="main">
                <img src={picada} alt="picada" />
                <div className="categorie">
                        <h2>Categorias</h2>
                        <Categories/>
                    </div>  
                    <hr/>


                    <div className="location">
                    <ImLocation className="icon-ubi"/>
                    <h1>Estamos hubicados </h1>
                    </div>

                    
                    
            </div>
        </>
    )
}

export default Main;