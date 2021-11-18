import { usePetsContext } from "../../Providers/GetPets";
import { useParams } from "react-router-dom";
import { ContainerGeneral } from "../ProfileDescriptions/styles";

import CardProfileUsers from "../CardProfileUsers";
import ListAnimalsCard from "../ListAnimalsCard";

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
      <ListAnimalsCard filtredPets={filtredCats} />
      <ListAnimalsCard filtredPets={filtredDogs} />
    </ContainerGeneral>
  );
};

export default ProfileDescriptions;
