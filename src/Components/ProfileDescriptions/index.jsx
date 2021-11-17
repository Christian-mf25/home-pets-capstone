import { usePetsContext } from "../../Providers/GetPets";
import { useParams } from "react-router-dom";
import {
  ContainerGeneral,
  ContainerAnimals,
} from "../ProfileDescriptions/styles";
import { Input } from "../../Styles/global";
import GenericCard from "../GenericCard";
import CardProfileUsers from "../CardProfileUsers";

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
      <CardProfileUsers user={user} />

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
            <>
              <GenericCard
                key={index}
                name={item.name}
                item={item}
                cardType="petCard"
                idPet={item.id}
              />
              <GenericCard
                key={index}
                name={item.name}
                item={item}
                cardType="petCard"
                idPet={item.id}
              />
            </>
          ))}
        </div>
      </ContainerAnimals>
    </ContainerGeneral>
  );
};

export default ProfileDescriptions;
