import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Contexto from "./Clase10/Contexto"; */
import PruebaContexto from "./Clase10/PruebaContexto";
import ItemListContainer from "./Clase7/ItemListContainer";
import Error404 from "./Clase8/Error404";
import ItemDetailContainer from "./Clase8/ItemDetailContainer";
import Footer from "./Footer";
import Header from "./Header";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider> 
      <BrowserRouter>
        <div>
          <Header />
              <Routes>
                <Route exact path={"/"} element={<PruebaContexto />} />
                <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
                <Route exact path={"/producto/:productoId"} element={<ItemDetailContainer />} />
                <Route path={"*"} element={<Error404 />} />
              </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;