import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (categoryId ? categoryId : "samsung s23") + "&limit=24")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            setItems(data.results);
        })
    }, [categoryId]);

    return (
        <div className="container">
            <div className="row">
                <h1>Fetch API - Mercadolibre</h1>
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;