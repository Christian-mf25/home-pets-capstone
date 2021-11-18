import CardProfileUsers from "../../Components/CardProfileUsers";
import CardPetProfile from "../../Components/CardPetProfile";
import { ContainerProfilePets } from "../ProfilePets/styles";
const ProfilePets = () => {
  return (
    <ContainerProfilePets>
      <CardProfileUsers />
      <CardPetProfile />
    </ContainerProfilePets>
  );
};

export default ProfilePets;
