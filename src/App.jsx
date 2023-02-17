//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Clase7/ItemListContainer";
import Error404 from "./Clase8/Error404";
import ItemDetailContainer from "./Clase8/ItemDetailContainer";
import Abstraccion2 from "./Clase9/Abstraccion2";
//import Eventos from "./Clase9/Eventos";
//import Intercambiabilidad from "./Clase9/Intercambiabilidad";
import Footer from "./Footer";
import Header from "./Header";

/* const ChauEventos = () => {
  return (
    <h2>Chau Eventos</h2>
  )
} */

const App = () => {
  //const [visible, setVisible] = useState(true);

/*   const quitarEventos = () => {
    setVisible(false);
  } */

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {/* <Route exact path={"/"} element={visible ? <Eventos /> : <ChauEventos />} /> */}
          {/* <Route exact path={"/"} element={<Intercambiabilidad item={10} inputType={"input"} />} /> */}
          <Route exact path={"/"} element={<Abstraccion2 />} />
          <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
          <Route exact path={"/producto/:productoId"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        {/* <button onClick={quitarEventos}>Quitar Eventos</button> */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;