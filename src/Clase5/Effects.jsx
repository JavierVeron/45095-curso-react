import { useEffect, useState } from "react";

const Effects = () => {
    const [curso, setCurso] = useState("JavaScript");
    
    useEffect(() => {
        console.log("2- Actualizando del Componente!");
        setCurso("React JS");

        return () => {
            console.log("3- Desmontaje del Componente!");
        }
    }, []);

    console.log("1- Se ha montado el componente!");

    function cambiarCurso() {
        setCurso("Backend");
    }

    return (
        <div>
            <h1>Effects</h1>
            <p>Curso: {curso}</p>
            <p><button onClick={cambiarCurso}>Cambiar Curso</button></p>         
        </div>
    )
}

export default Effects;