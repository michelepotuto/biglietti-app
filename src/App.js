import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Fragment, useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Axios from "axios";

import AuthContext from "./store/auth-context";
import NavbarLogin from "./components/Header/NavbarLogin";
import { useDispatch } from "react-redux";

import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Header/Footer";
import Cart from "./components/pages/Cart";
import { counterActions } from "./store/counter-store";

function App() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);

  const dispatch = useDispatch();
  dispatch({ type: counterActions.START });

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getUser").then((response) => {
      setUser(response.data);
    });
  }, []);

  const usernameChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = user.find((u) => u.userCode === input);
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
                <label className="m-2">Codice cliente </label>
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
