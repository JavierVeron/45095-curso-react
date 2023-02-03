import { useState } from "react";
import Effects from "./Clase5/Effects";
import Footer from "./Footer";
import Header from "./Header";

const OtroComponente = () => {
  return (
      <h1>Hola! Soy otro componente!</h1>
  )
}

const App = () => {
  const [visible, setVisible] = useState(true);

  function cargarOtroComponente() {
    setVisible(false);
  }

  return (
    <div>
      <Header />
      <p><button onClick={cargarOtroComponente}>Cargar Otro Componente?</button></p>
      {visible ? <Effects /> : <OtroComponente /> }
      <Footer />
    </div>
  )
}

export default App;