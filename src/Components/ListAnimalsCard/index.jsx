import { Input } from "../../Styles/global";
import { ContainerAnimals } from "./styles";
import GenericCard from "../GenericCard/index";
const ListAnimalsCard = ({ filtredPets, cats }) => {
  return (
    <>
      <ContainerAnimals>
        <div className="header">
          {cats ? <h3>Gato</h3> : <h3>Cachorro</h3>}
          {/* <h3>Pets</h3> */}
        </div>
        <Input placeholder="Pesquisa por" className="input" />

        <div className="ContainerCard">
          {filtredPets.map((item, index) => (
            <GenericCard
              key={index}
              name={item.name}
              cardType="petCard"
              idPet={item.id}
            />
          ))}
        </div>
      </ContainerAnimals>
    </>
  );
};

export default ListAnimalsCard;
