import { useEffect, useState } from "react";

const Fetch = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((respuesta) => respuesta.json())
        .then((arrayDatos) => {
            setProductos(arrayDatos);
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Consumiendo APIs</h1>
                    <ul>
                        {productos.map(item => 
                            <li>{`(${item.id}) - ${item.title} -> $${item.price}`}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fetch;