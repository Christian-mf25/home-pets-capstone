import { usePetsContext } from "../../Providers/GetPets";
import petsImg from "../../Assets/img/pets-ong-filtro20-80.png";
import { useParams } from "react-router-dom";
import {
  ContainerGeneral,
  ContainerAnimals,
} from "../ProfileDescriptions/styles";
import { Input, PrimaryButton } from "../../Styles/global";
import GenericCard from "../GenericCard";

const ProfileDescriptions = ({ user }) => {
  const { id } = useParams();
  const { pets } = usePetsContext();
  const filtredCats = pets.filter(
    (item) => item.userId === Number(id) && item.type === "gato"
  );
  const filtredDogs = pets.filter(
    (item) => item.userId === Number(id) && item.type === "cachorro"
  );
  return (
    <ContainerGeneral>
      <div className="ContainerDetails">
        <div className="ContainerHeader">
          <img src={petsImg} />
          <h1>{user.name}</h1>
        </div>
        <div className="ContainerDetails">
          <div className="Details">
            <h2>Data de Fundação</h2>
            <p>{user.foundationDate}</p>
          </div>
          <div className="Details">
            <h2>Localização</h2>
            <p>{user.city}</p>
          </div>
          <div className="DetailsDescription">
            <h2>Descrição </h2>
            <p>{user.description}</p>
          </div>
          <div className="Details">
            <h2>Cachorros</h2>
            <p>{user.numberOfDogs}</p>
          </div>
          <div className="Details">
            <h2>Gatos</h2>
            <p>{user.numberOfCats}</p>
          </div>
        </div>
        <PrimaryButton className="Button">Doar um valor</PrimaryButton>
      </div>

      <ContainerAnimals>
        <div className="header">
          <h3>Gatos</h3>
        </div>
        <Input placeholder="Pesquisa por" className="input" />

        <div>
          {filtredCats.map((item, index) => (
            <GenericCard
              key={index}
              name={item.name}
              cardType="petCard"
              idPet={item.id}
            />
          ))}
        </div>
      </ContainerAnimals>

      <ContainerAnimals>
        <div className="header">
          <h3>Cães</h3>
        </div>
        <Input placeholder="Pesquisa por" className="input" />

        <div>
          {filtredDogs.map((item, index) => (
            <GenericCard
              key={index}
              name={item.name}
              item={item}
              cardType="petCard"
              idPet={item.id}
            />
          ))}
        </div>
      </ContainerAnimals>
    </ContainerGeneral>
  );
};

export default ProfileDescriptions;
