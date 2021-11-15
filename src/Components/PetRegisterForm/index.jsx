import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { usePetRegister } from "../../Providers/RegisterAPet";
import { Input, PrimaryButton } from "../../Styles/global";
import { StyledDialog, StyledPetButton } from "./styles";
import { useState } from "react";

const PetRegisterForm = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const history = useHistory();
  const { petRegister } = usePetRegister();

  if (!token) {
    history.push("/login");
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => setIsModalOpen(!isModalOpen);

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
    <StyledPetButton>
      <button onClick={handleClick}></button>
      <StyledDialog className="dialog" open={isModalOpen} onClose={handleClick}>
        <form onSubmit={handleSubmit(petRegister)}>
          <div className="buttonDiv">
            <p>Cadastrar animal</p>
            <button onClick={handleClick}>X</button>
          </div>
          <div className="formDiv">
            <div className="nomeType">
              <Input
                label="Nome do pet"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <FormControl
                className="typePet"
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Tipo de pet
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
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
            </div>

            <Input
              className="inputForm"
              label="Cidade"
              {...register("city")}
              error={!!errors.city}
              helperText={errors.city?.message}
            />

            <Input
              className="inputForm"
              label="Estado"
              {...register("state")}
              error={!!errors.state}
              helperText={errors.state?.message}
            />

            <Input
              className="inputForm"
              label="Porte do animal"
              {...register("animalSize")}
              error={!!errors.animalSize}
              helperText={errors.animalSize?.message}
            />

            <Input
              className="inputForm"
              label="Raça"
              {...register("breed")}
              error={!!errors.breed}
              helperText={errors.breed?.message}
            />

            <Input
              className="inputForm"
              label="Pelagem"
              {...register("fur")}
              error={!!errors.fur}
              helperText={errors.fur?.message}
            />

            <Input
              className="inputForm"
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
              className="inputForm inputFormDescription"
              multiline
              rows={3}
              rowsMax={4}
              placeholder="Conte one encontrou, seu comportamento, vacinas tomadas..."
              label="Conte mais sobre o pet"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </div>
          <PrimaryButton className="divSubmitButton" type="sumit">
            Cadastrar
          </PrimaryButton>
        </form>
      </StyledDialog>
    </StyledPetButton>
  );
};

export default PetRegisterForm;
