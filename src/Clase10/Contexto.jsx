import React, { useState, createContext, useContext } from "react";

// Creo un Contexto
const ThemeContext = createContext();
const ProductosContext = createContext();

// Componente utilizando Prop
/* const Componente1 = ({isDarkMode}) => {
    return (
        <Componente2 isDarkMode={isDarkMode} />
    )
}

// Componente utilizando Prop
const Componente2 = ({isDarkMode}) => {
    return (
        <div>
            <p>Valor de isDarkMode: <b>{isDarkMode}</b></p>
        </div>
    )
} */

// Componente utilizando Context
const Componente1 = () => {
    return (
        <Componente2 />
    )
}

// Componente utilizando Context
const Componente2 = () => {
    // Uso un Contexto
    const {isDarkMode, sosFeliz} = useContext(ThemeContext);
    const {productos, totalProductos} = useContext(ProductosContext);

    return (
        <div>
            <p>Valor de isDarkMode: <b>{isDarkMode}</b></p>
            <p>Sos Feliz? <b>{sosFeliz}</b></p>
            <p>Total de Productos: {totalProductos()}</p>
            <ul>
                {productos.map(prod => <li key={prod.id}>{prod.nombre} - ${prod.precio}</li>)}
            </ul>
        </div>
    )
}

// Ejemplo Consumer
/* const Componente2 = () => {
    return (
        <ThemeContext.Consumer>
            {({esMiercoles}) => <p>¿Es Miércoles? <b>{esMiercoles}</b></p>}
        </ThemeContext.Consumer>
    )
} */

// Componente sin Contexto
/* const Contexto = () => {
    const [isDarkMode, setDarkMode] = useState("true");

    return (
        <div className="m-5">
            <Componente1 isDarkMode={isDarkMode} />
        </div>
    )
} */

// Componente con Contexto
const Contexto = () => {
    const [isDarkMode, setDarkMode] = useState("true");
    const [sosFeliz, setSosFeliz] = useState("Sí");

    const productos = [
        {id:1, nombre:"Coca Cola", precio:500},
        {id:2, nombre:"Pepsi", precio:480},
        {id:3, nombre:"Manaos", precio:280},
    ];

    const saludar = () => {
        alert("Hola Chicos!");
    };

    const totalProductos = () => {
        return productos.length;
    }

    return (
        <ThemeContext.Provider value={{isDarkMode, sosFeliz, productos, saludar}}>
            <ProductosContext.Provider value={{productos, totalProductos}}>
                <Componente1 />
            </ProductosContext.Provider>
        </ThemeContext.Provider>
    )
}

export default Contexto;