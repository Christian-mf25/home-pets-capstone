import CardProfileUsers from "../../Components/CardProfileUsers";
import CardPetProfile from "../../Components/CardPetProfile";
import { ContainerProfilePets } from "../ProfilePets/styles";
import { useParams } from "react-router-dom";
import { usePetsContext } from "../../Providers/GetPets";
import { useUsers } from "../../Providers/GetUsers";

const ProfilePets = () => {
  const { id } = useParams();
  const { users } = useUsers();
  const { pets } = usePetsContext();
  const pet = pets.filter((pet) => pet.id === Number(id));
  const user = users.filter((user) => user.id === pet[0].userId);
  console.log(user);
  return (
    <ContainerProfilePets>
      <CardProfileUsers user={user[0]} />
      <CardPetProfile pet={pet[0]} emailOng={user[0].email} />
    </ContainerProfilePets>
  );
};

export default ProfilePets;
