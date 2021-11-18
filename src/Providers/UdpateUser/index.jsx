import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const UpdateUserProfileContext = createContext();

export const UpdateUserProfileProvider = ({ children }) => {
  const id = JSON.parse(localStorage.getItem("@Pets:id"));
  const token = JSON.parse(localStorage.getItem("@Pets:token"));

  const updateProfile = (data) => {
    const newData = { ...data, userId: id };
    api
      .post("users/", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success(`${newData.name} Atualizado com sucesso!`);
      })
      .catch((err) => {
        console.log(err);
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
