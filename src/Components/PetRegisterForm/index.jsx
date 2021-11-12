import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { usePetRegister } from "../../Providers/RegisterAPet";

const PetRegisterForm = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const history = useHistory();
  const { petRegister } = usePetRegister();

  if (!token) {
    history.push("/login");
  }

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    type: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    animalSize: yup.string().required("Campo obrigatório"),
    breed: yup.string().required("Campo obrigatório"),
    fur: yup.string().required("Campo obrigatório"),
    age: yup.number().required("Campo obrigatório"),
    vaccinated: yup.boolean().required("Campo obrigatório"),
    castrated: yup.boolean().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <section>
      <form onSubmit={handleSubmit(petRegister)}>
        <TextField
          label="Nome do pet"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Tipo de pet
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={type}
            {...register("type")}
            error={!!errors.type}
            helperText={errors.type?.message}
            label="Age"
          >
            <MenuItem value={"gato"}>Gato</MenuItem>
            <MenuItem value={"cachorro"}>Cachorro</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Cidade"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("city")}
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <TextField
          label="Estado"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("state")}
          error={!!errors.state}
          helperText={errors.state?.message}
        />

        <TextField
          label="Porte do animal"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("animalSize")}
          error={!!errors.animalSize}
          helperText={errors.animalSize?.message}
        />

        <TextField
          label="Raça"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("breed")}
          error={!!errors.breed}
          helperText={errors.breed?.message}
        />

        <TextField
          label="Pelagem"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("fur")}
          error={!!errors.fur}
          helperText={errors.fur?.message}
        />

        <TextField
          label="Idade do pet"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            O pet é vacinado?
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={type}
            {...register("vaccinated")}
            error={!!errors.vaccinated}
            helperText={errors.vaccinated?.message}
            label="Age"
          >
            <MenuItem value={true}>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
            <MenuItem value={false}>Não sei</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            O pet é castrado?
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={type}
            {...register("castrated")}
            error={!!errors.castrated}
            helperText={errors.castrated?.message}
            label="Age"
          >
            <MenuItem value={true}>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
            <MenuItem value={false}>Não sei</MenuItem>
          </Select>
        </FormControl>

        <TextField
          placeholder="Conte one encontrou, seu comportamento, vacinas tomadas..."
          label="Conte mais sobre o pet"
          size="medium"
          variant="outlined"
          margin="dense"
          color="primary"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <Button variant="contained" color="primary" type="sumit">
          Cadastrar
        </Button>
      </form>
    </section>
  );
};

export default PetRegisterForm;
