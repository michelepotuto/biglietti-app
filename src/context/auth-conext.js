import React, { useState } from "react";

const storageKey = "logged-user";
const AuthContext = React.createContext({
  isLoggedin: sessionStorage.getItem(storageKey),
  loggedUser: "",
  login: (obj) => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedin, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem(storageKey) || false)
  );
  const [loggedUser, setLoggedUser] = useState("");

  const loginHandler = (obj) => {
    setIsLoggedIn(false);
    setLoggedUser("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedin,
        loggedUser: loggedUser,
        login: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
