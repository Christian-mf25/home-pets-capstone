import pets from "../../Assets/img/pets-ong-filtro20-80.png";
import {
  ContainerHeader,
  ContainerDetails,
  ContainerDescription,
  ContainerGeneral,
  ContainerAllDetails,
} from "../ProfileDescriptions/styles";
const ProfileDescriptions = ({ user }) => {
  return (
    <ContainerGeneral>
      <ContainerHeader>
        <img src={pets} />
        <h1>{user.name}</h1>
      </ContainerHeader>
      <ContainerAllDetails>
        <ContainerDetails>
          <h2>Data de Fundação</h2>
          <p>{user.foundationDate}</p>
        </ContainerDetails>
        <ContainerDetails>
          <h2>Localização</h2>
          <p>{user.city}</p>
        </ContainerDetails>
        <ContainerDescription>
          <h2>Descrição</h2>
          <p>{user.description}</p>
        </ContainerDescription>
        <ContainerDetails>
          <h2>Cachorros</h2>
          <p>{user.numberOfDogs}</p>
        </ContainerDetails>
        <ContainerDetails>
          <h2>Gatos</h2>
          <p>{user.numberOfCats}</p>
        </ContainerDetails>
      </ContainerAllDetails>
    </ContainerGeneral>
  );
};

export default ProfileDescriptions;
