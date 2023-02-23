import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const PruebaContexto = () => {
    const {productos, totalProductos} = useContext(CartContext);

    return (
        <div>
            <h1>Probando nuestro Cart Context</h1>
            <p>Total de Productos: {totalProductos()}</p>
            {/* <p>Suma Total de Precios: {totalPrecio()}</p> */}
            <ul>
                {productos.map(prod => <li key={prod.id}>{prod.nombre} - ${prod.precio}</li>)}
            </ul>

        </div>
    )
}

export default PruebaContexto;