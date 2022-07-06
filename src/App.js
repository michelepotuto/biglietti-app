import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Header/Navbar";
import { Fragment, useContext, useEffect, useState } from "react";
import Home from "./components/pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Header/Footer";
import Cart from "./components/pages/Cart";
import "bootstrap-icons/font/bootstrap-icons.css";
import AuthContext from "./logic/auth-context";
import login from "../src/login.json";
import NavbarLogin from "./components/Header/NavbarLogin";

function App() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const [input, setInput] = useState("");

  const usernameChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const [user, setUser] = useState(login);

  const handleSubmit = (event) => {
    const userData = user.find((u) => u.codiceCliente === input);
    const obj = { ...userData };

    if (userData) {
      ctx.login(obj);
      navigate("/home");
    } else {
      alert("codice errato");
    }
  };

  return (
    <Fragment>
      {!ctx.isLoggedIn ? (
        <div>
          <NavbarLogin></NavbarLogin>
          <div className="login_container">
            {/* <NavbarLogin /> */}
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Codice cliente </label>
                <input
                  autoComplete="on"
                  onChange={usernameChangeHandler}
                  type="password"
                  name="pass"
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />

          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/dettaglio" element={<ProdottoDettagliato />} />
            <Route path="/carrello" element={<Carrello />} />
            <Route path="*" element={<App />} /> */}
          </Routes>
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
