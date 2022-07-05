import React, { useContext, useState } from "react";
import AuthContext from "./context/auth-context";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [fetchUser, setFetchUser] = useState([]);
  const userCtx = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const UserData = fetchUser.find((u) => u.password === userInput);
    const obj = { ...UserData };
    if (UserData) {
      userCtx.login(obj);
    } else {
      userCtx.logout();
    }
  };

  const inputHandler = (event) => {
    const value = event.target.value;
    setUserInput(value);
  };
  console.log(userInput);

  return (
    <>
      {!userCtx.isLoggedin ? (
        <form onSubmit={handleSubmit}>
          <input onChange={inputHandler} name="pass" type="password" />
          <button>Login</button>
        </form>
      ) : (
        alert("sei dentro")
      )}
    </>
  );
};

export default Login;
