// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button, TextField } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import api from "../../Services/api";
// import { toast } from "react-toastify";

// const LoginForm = () => {
//   const token = JSON.parse(localStorage.getItem("@Pets:token"));
//   // const { login } = useLogin();
//   const history = useHistory();

//   const sendTo = (path) => {
//     history.push(path);
//   };

//   const schema = yup.object().shape({
//     email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
//     password: yup.string().required("Campo obrigatório"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleForm = (data) => {
//     api
//       .post("/login/", data)
//       .then((res) => {
//         localStorage.clear();
//         toast.success(`Bem vindo pkejnrgek`);
//         localStorage.setItem(
//           "@Pets:token",
//           JSON.stringify(res.data.accessToken)
//         );
//         localStorage.setItem("@Pets:userId", JSON.stringify(res.data.user.id));
//         history.push("/home");
//       })
//       .catch((_) => {
//         toast.error("E-mail ou senha inválido");
//       });
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit(handleForm)}>
//         <TextField
//           label="E-mail"
//           size="medium"
//           variant="outlined"
//           margin="dense"
//           color="primary"
//           {...register("email")}
//           error={!!errors.email}
//           helperText={errors.email?.message}
//         />
//         <TextField
//           label="Password"
//           size="medium"
//           variant="outlined"
//           margin="dense"
//           color="primary"
//           {...register("password")}
//           error={!!errors.password}
//           helperText={errors.password?.message}
//         />

//         <Button variant="contained" color="primary">
//           Entrar
//         </Button>
//       </form>
//       <p>Ainda não tem conta?</p>
//       <Button onClick={() => sendTo("/register")}></Button>
//     </section>
//   );
// };

// export default LoginForm;
