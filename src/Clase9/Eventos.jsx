import { useEffect } from "react";

const Eventos = () => {
    const onResize = () => {
        console.log("Hiciste un Resize!");
    }

    const saludar = () => {
        console.log("Hola Chicos!");
    }

    const capturarClick = (event) => {
        console.log(event.nativeEvent);
    }

    const capturarTecla = (event) => {
        event.preventDefault();
        console.log(event.key);
    }

    //Agregando un Evento
    window.addEventListener("resize", onResize);

    //Quitando un Evento
    useEffect(() => {
        return () => {
            window.removeEventListener("resize", onResize);
        }
    });

    return (
        <div className="container">
            <h1 onClick={saludar}>Eventos</h1>
            <button onClick={(e) => {capturarClick(e)}}>Hacer Click</button>
            <form>
                <h2>Form con EventPreventDefault</h2>
                <input type="text" onChange={(e) => {capturarTecla(e)}} />
            </form>
           

        </div>
        
    )
}

export default Eventos;