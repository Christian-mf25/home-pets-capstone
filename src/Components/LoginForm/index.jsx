import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useLogin } from "../../Providers/Login";
import { useEffect } from "react";
import { Input, PrimaryButton, SecondaryButton } from "../../Styles/global";

const LoginForm = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const { login } = useLogin();
  const history = useHistory();

  useEffect(() => {
    token && sendTo("/home");
  }, [token]);

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
        <Input
          label="E-mail"
          size="medium"
          variant="outlined"
          margin="dense"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Input
          label="Password"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <PrimaryButton variant="contained" type="submit">
          Entrar
        </PrimaryButton>
      </form>
      <p>Ainda não tem conta?</p>
      <SecondaryButton variant="contained" onClick={() => sendTo("/register")}>
        Criar conta
      </SecondaryButton>
    </section>
  );
};

export default LoginForm;
