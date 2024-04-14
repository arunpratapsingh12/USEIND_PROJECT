// UserContext.js
import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const login = (userData) => {
    setUserData(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  console.log(userData)

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
