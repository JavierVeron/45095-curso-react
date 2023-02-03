import { useState } from "react";

const States = () => {
    //let feliz = "Sí"; // Variable común y corriente
    const [feliz, setFeliz] = useState("Sí");
    const [cantidad, setCantidad] = useState(0);
    const [fecha, setFecha] = useState(new Date());

    function cambiarEstadoAnimo() {
        feliz === "Sí" ? setFeliz("No") : setFeliz("Sí");
        //setFeliz({id:1, estado:"Loquísimoooooo", imagen:"🚀"}); // Guardo en el State un objeto
        console.log("Sos Feliz: " + feliz);
        console.log("Cambiando el estado de ánimo!");
        setFecha(new Date());
        console.log("Fecha: " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
    }

    function sumar() {
        setCantidad(cantidad + 1);
    }

    function restar() {
        setCantidad(cantidad - 1);
    }

    return (
        <div>
            <h1>States</h1>
            <p>Sos Feliz? <b>{feliz}</b></p>
            <p>Cantidad: <b>{cantidad}</b></p>
            <p><input type="button" onClick={cambiarEstadoAnimo} value="Cambiar Estado de Ánimo!" /></p>
            <p><input type="button" onClick={sumar} value="Sumar" /></p>
            <p><input type="button" onClick={restar} value="Restar" /></p>
        </div>
    )
}

export default States;