import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import 'bootstrap-icons/font/bootstrap-icons.css';




function App() {
  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/dettaglio" element={<ProdottoDettagliato />} />
            <Route path="/carrello" element={<Carrello />} />
            <Route path="*" element={<App />} /> */}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
