import { useEffect } from "react";

const Promesas = () => {
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            resolve("Hola Coders!");
        });
    
        console.log(task);
        
        task.then((resultado) => {
            console.log(resultado);
        }/* , (error) => {
            console.log("Error #1: " + error);
        } */)
        .catch((error) => {
            console.log("Error #2: " + error);
        })
        .then(() => {
            console.log("Estoy ejecutando otro proceso... #1");
        })
        .then(() => {
            console.log("Estoy ejecutando otro proceso... #2");
        })
        .finally(() => {
            console.log("Fin del proceso!");
        });
    }, []);    

    return (
        <div>
            <h1>Promesas</h1>
        </div>
    )
}

export default Promesas;