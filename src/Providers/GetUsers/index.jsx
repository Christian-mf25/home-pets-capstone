import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services/api";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const token = JSON.stringify(localStorage.getItem("@Users: token"));

  useEffect(() => {
    api
      .get("users/")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
