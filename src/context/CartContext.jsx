import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const productos = [
        {id:1, nombre:"Coca Cola", precio:500},
        {id:2, nombre:"Pepsi", precio:480},
        {id:3, nombre:"Manaos", precio:280},
        {id:4, nombre:"Cunnington", precio:320},
    ];

    const totalProductos = () => {
        return productos.length;
    }

    return (
        <CartContext.Provider value={{productos, totalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;