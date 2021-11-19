import CardProfileUsers from "../../Components/CardProfileUsers";
import { usePetsContext } from "../../Providers/GetPets";
import { useParams } from "react-router-dom";
import { useUsers } from "../../Providers/GetUsers";
import { ContainerProfileEdit } from "../ProfileEdit/styles";
import ListAnimalsCard from "../../Components/ListAnimalsCard";

const ProfileEdit = () => {
  const { id } = useParams();
  const { users } = useUsers();
  const { pets } = usePetsContext();
  const user = users.filter((user) => user.id === Number(id));
  const filtredCats = pets.filter(
    (item) => item.userId === Number(id) && item.type === "gato"
  );
  const filtredDogs = pets.filter(
    (item) => item.userId === Number(id) && item.type === "cachorro"
  );
  return (
    <ContainerProfileEdit>
      <CardProfileUsers user={user[0]} edit={true} />
      <ListAnimalsCard filtredPets={filtredCats} cats={true} />
      <ListAnimalsCard filtredPets={filtredDogs} />
    </ContainerProfileEdit>
  );
};

export default ProfileEdit;
