import CompChildren, { Ad } from "./Clase4/CompChildren";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <CompChildren lugar="Coderhouse">
        <Ad />
        <Ad />
        <Ad />
      </CompChildren>
      <Footer />
    </div>
  )
}

export default App;