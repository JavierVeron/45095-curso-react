import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Clase7/ItemListContainer";
import Error404 from "./Clase8/Error404";
import ItemDetailContainer from "./Clase8/ItemDetailContainer";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
          <Route exact path={"/producto/:productoId"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;