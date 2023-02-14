import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {productoId} = useParams();

    useEffect(() => {
        fetch("https://api.mercadolibre.com/items/" + productoId)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            setItem(data);
        })
    }, [productoId]);

    return (
        <ItemDetail item={item} />      
    )
}

export default ItemDetailContainer;