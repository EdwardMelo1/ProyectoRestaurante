/* import React, {useState}from 'react'
import Whatsapp from "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"


export function SetionContact(){

    const [Form, setForm]=useState([]);
    
    const sendWhatsapp=() =>{
        if(Form?. name && Form?.text){
            let numero = 573237125188;
            let url=`http://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${Form?.name}, mi tipo de problema con mi carro:20%${Form?.text}`;
            window.open(url);
        }
    }
    const changeText = e => setForm([...Form, [e.target.name].e.target.value]);
    
    return (
        <>
        <div className='watsfa'>
            <button className='Wats' onClick={sendWhatsapp}>
                    <img src={Whatsapp} alt="imagen whasapp" />
                    envia por whatsapp
            </button>
        </div>
        </>

        )
}

 */