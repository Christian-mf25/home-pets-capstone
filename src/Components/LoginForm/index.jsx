import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useLogin } from "../../Providers/Login";
import { useEffect } from "react";

const LoginForm = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const { login } = useLogin();
  const history = useHistory();

	useEffect(() =>{
		token && sendTo("/home")
	},[token])

  const sendTo = (path) => {
    history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <section>
      <form onSubmit={handleSubmit(login)}>
        <TextField
          label="E-mail"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button variant="contained" color="primary" type="sumit">
          Entrar
        </Button>
      </form>
      <p>Ainda não tem conta?</p>
      <Button variant="contained" onClick={() => sendTo("/register")}>
        Criar conta
      </Button>
    </section>
  );
};

export default LoginForm;
