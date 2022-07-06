import React, { useState, useEffect } from "react";

const storageKey = "logged-user";
const AuthContext = React.createContext({
  isLoggedin: sessionStorage.getItem(storageKey),
  loggedUser: "",
  login: (obj) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedin, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem(storageKey) || false)
  );
  const [loggedUser, setLoggedUser] = useState("");

  const loginHandler = (obj) => {
    setIsLoggedIn(true);
    setLoggedUser("");
    sessionStorage.setItem(storageKey, JSON.stringify(obj));
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setLoggedUser("");

    // sessionStorage.removeItem(storageName.CART);
    // sessionStorage.removeItem(storageName.COUNT);
    // sessionStorage.removeItem(storageName.DETAIL);
    sessionStorage.removeItem(storageKey);
  };

  useEffect(() => {
    const storageUser = sessionStorage.getItem(storageKey);
    const obj = JSON.parse(storageUser);
    if (storageUser) {
      setIsLoggedIn(true);
      setLoggedUser(obj.nome);
      sessionStorage.setItem(storageKey, storageUser);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedin,
        loggedUser: loggedUser,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
