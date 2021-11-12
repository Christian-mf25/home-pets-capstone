import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import petsImg from "../../Assets/img/pets-ong-filtro20-80.png";

export const RegisterAPetContext = createContext();

export const RegisterAPetProvider = ({ children }) => {
  const id = JSON.parse(localStorage.getItem("@Pets:userId"));
  const token = JSON.parse(localStorage.getItem("@Pets:token"));

  const petRegister = (data) => {
    const newData = { ...data, img: petsImg, userId: id };
    console.log(token);
    api
      .post("petDonation/", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success(`${newData.name} cadastrado com sucesso!`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado, tente novamente mais tarde");
      });
  };

  return (
    <RegisterAPetContext.Provider value={{ petRegister }}>
      {children}
    </RegisterAPetContext.Provider>
  );
};

export const usePetRegister = () => useContext(RegisterAPetContext);
