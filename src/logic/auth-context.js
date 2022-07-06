import React, { useState } from "react";

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
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setLoggedUser("");
  };

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
