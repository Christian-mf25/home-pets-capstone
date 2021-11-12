import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { usePetRegister } from "../../Providers/RegisterAPet";
import { Input, PrimaryButton, StyledFormControl } from "../../Styles/global";
import { RegisterContainer } from "./styles";

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
    <RegisterContainer>
      <h2>Cadastro de pet</h2>
      <form onSubmit={handleSubmit(petRegister)}>
        <Input
          label="Nome do pet"
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
            label="Tipo do pet"
            SelectDisplayProps={{
              style: { width: 200 },
            }}
          >
            <MenuItem value={"gato"}>Gato</MenuItem>
            <MenuItem value={"cachorro"}>Cachorro</MenuItem>
          </Select>
        </FormControl>

        <Input
          label="Cidade"
          {...register("city")}
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <Input
          label="Estado"
          {...register("state")}
          error={!!errors.state}
          helperText={errors.state?.message}
        />

        <Input
          label="Porte do animal"
          {...register("animalSize")}
          error={!!errors.animalSize}
          helperText={errors.animalSize?.message}
        />

        <Input
          label="Raça"
          {...register("breed")}
          error={!!errors.breed}
          helperText={errors.breed?.message}
        />

        <Input
          label="Pelagem"
          {...register("fur")}
          error={!!errors.fur}
          helperText={errors.fur?.message}
        />

        <Input
          label="Idade do pet"
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            O pet é vacinado?
          </InputLabel>
          <Select
            //   value={type}
            {...register("vaccinated")}
            error={!!errors.vaccinated}
            helperText={errors.vaccinated?.message}
            label="Vacinado"
            SelectDisplayProps={{
              style: { width: 190 },
            }}
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
            label="Castrado"
            SelectDisplayProps={{
              style: { width: 190 },
            }}
          >
            <MenuItem value={true}>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
            <MenuItem value={false}>Não sei</MenuItem>
          </Select>
        </FormControl>

        <Input
          className="registerDescription"
          multiline
          rows={3}
          rowsMax={4}
          placeholder="Conte one encontrou, seu comportamento, vacinas tomadas..."
          label="Conte mais sobre o pet"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <PrimaryButton type="sumit">Cadastrar</PrimaryButton>
      </form>
    </RegisterContainer>
  );
};

export default PetRegisterForm;
