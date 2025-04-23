import { useState, createContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  let [loginStatus, setLoginStatus] = useState(false);
  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
