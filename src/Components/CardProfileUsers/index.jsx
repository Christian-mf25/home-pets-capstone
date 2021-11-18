import { ContainerDetails } from "./styles";
import petsImg from "../../Assets/img/pets-ong-filtro20-80.png";
import { Input, PrimaryButton } from "../../Styles/global";
import { useState } from "react";
import { UserUpdateProfile } from "../../Providers/UdpateUser/index";
import { useForm } from "react-hook-form";

const CardProfileUsers = ({ user, edit }) => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));

  const { updateProfile } = UserUpdateProfile();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateProfile(data);
    console.log(data);
  };

  return (
    <>
      {!edit ? (
        <ContainerDetails>
          <div className="ContainerHeader">
            <img src={petsImg} alt="Pets" />
            <h1>{user?.name}</h1>
          </div>
          <div className="ContainerDetails">
            <div className="Details">
              <h2>Data de Fundação</h2>
              <p>{user?.foundationDate}</p>
            </div>
            <div className="Details">
              <h2>Localização</h2>
              <p>{user?.city}</p>
            </div>
            <div className="DetailsDescription">
              <h2>Descrição </h2>
              <p>{user?.description}</p>
            </div>
            <div className="Details">
              <h2>Cachorros</h2>
              <p>{user?.numberOfDogs}</p>
            </div>
            <div className="Details">
              <h2>Gatos</h2>
              <p>{user?.numberOfCats}</p>
            </div>
          </div>
          <PrimaryButton className="Button">Doar um valor</PrimaryButton>
        </ContainerDetails>
      ) : (
        <ContainerDetails>
          <div className="ContainerHeader">
            <img src={petsImg} alt="Pets" />
            <h1>{user?.name}</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="ContainerDetails">
              <div className="Details">
                <h2>Data de Fundação</h2>
                <Input
                  label="Data"
                  size="medium"
                  variant="outlined"
                  margin="dense"
                  {...register("birthDate")}
                />
              </div>
              <div className="Details">
                <h2>Localização</h2>
                <Input
                  label="Cidade"
                  size="medium"
                  variant="outlined"
                  margin="dense"
                  {...register("city")}
                />
              </div>
              <div className="DetailsDescription">
                <h2>Descrição </h2>
                <Input
                  label="Descrição"
                  size="medium"
                  variant="outlined"
                  margin="dense"
                  {...register("description")}
                />
              </div>
              <div className="Details">
                <h2>Cachorros</h2>
                <Input
                  label="Quantidades de Cachorros"
                  size="medium"
                  variant="outlined"
                  margin="dense"
                  {...register("numberOfDogs")}
                />
              </div>
              <div className="Details">
                <h2>Gatos</h2>
                <Input
                  label="Quantidades de Gatos"
                  size="medium"
                  variant="outlined"
                  margin="dense"
                  {...register("numberOfCats")}
                />
              </div>
              <PrimaryButton
                variant="contained"
                type="sumit"
                className="Button"
              >
                Confirmar alterações
              </PrimaryButton>
            </div>
          </form>
        </ContainerDetails>
      )}
      s
    </>
  );
};

export default CardProfileUsers;
