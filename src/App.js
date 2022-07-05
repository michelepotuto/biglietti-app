import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import Login from "./components/Login";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Login></Login>
    </Fragment>
  );
}

export default App;
