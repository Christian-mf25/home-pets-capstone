import { ContainerDetails } from "./styles";
import petsImg from "../../Assets/img/pets-ong-filtro20-80.png";
import { Input, PrimaryButton } from "../../Styles/global";

const CardProfileUsers = ({ user, edit }) => {
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
            <h1>{user.name}</h1>
          </div>
          <div className="ContainerDetails">
            <div className="Details">
              <h2>Data de Fundação</h2>
              <Input />
            </div>
            <div className="Details">
              <h2>Localização</h2>
              <Input />
            </div>
            <div className="DetailsDescription">
              <h2>Descrição </h2>
              <Input />
            </div>
            <div className="Details">
              <h2>Cachorros</h2>
              <Input />
            </div>
            <div className="Details">
              <h2>Gatos</h2>
              <Input />
            </div>
            <PrimaryButton className="Button">
              Confirmar alterações
            </PrimaryButton>
          </div>
        </ContainerDetails>
      )}
    </>
  );
};

export default CardProfileUsers;
