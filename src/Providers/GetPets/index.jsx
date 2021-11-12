import { createContext, useState, useEffect } from "react";
import api from "../../Services/api";

export const PetsContext = createContext([]);

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const token = JSON.stringify(localStorage.getItem("@Pets:token"));

  useEffect(() => {
    api
      .get("petDonation/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPets(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PetsContext.Provider value={{ pets }}>{children}</PetsContext.Provider>
  );
};
