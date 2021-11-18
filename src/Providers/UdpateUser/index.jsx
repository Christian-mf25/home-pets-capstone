import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const UpdateUserProfileContext = createContext();

export const UpdateUserProfileProvider = ({ children }) => {
  const id = JSON.parse(localStorage.getItem("@Pets:userId"));
  const token = JSON.parse(localStorage.getItem("@Pets:token"));

  const updateProfile = (data) => {
    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success(`${data.name} Atualizado com sucesso!`);
      })
      .catch((err) => {
        toast.error("Algo deu errado, tente novamente mais tarde");
      });
  };

  return (
    <UpdateUserProfileContext.Provider value={{ updateProfile }}>
      {children}
    </UpdateUserProfileContext.Provider>
  );
};

export const UserUpdateProfile = () => useContext(UpdateUserProfileContext);
