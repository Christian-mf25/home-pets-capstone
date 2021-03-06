import { createContext, useContext } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();

  const login = (data) => {
    api
      .post("/login/", data)
      .then((res) => {
        localStorage.clear();
        console.log(res);
        toast.success(`Bem vindo ${res.data.user.name}`);
        localStorage.setItem(
          "@Pets:token",
          JSON.stringify(res.data.accessToken)
        );
        localStorage.setItem("@Pets:userId", JSON.stringify(res.data.user.id));
        localStorage.setItem("@Pets:city", JSON.stringify(res.data.user.city));
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("E-mail ou senha inválido");
      });
  };

  const logOut = () => {
    toast.success("Até mais");
    localStorage.clear();
    return (window.location.href = "https://home-pets.vercel.app/");
  };

  return (
    <LoginContext.Provider value={{ logOut, login }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
