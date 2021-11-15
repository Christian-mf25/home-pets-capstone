import { useUsers } from "../../Providers/GetUsers";
import { usePetsContext } from "../../Providers/GetPets";
import ProfileDescriptions from "../../Components/ProfileDescriptions";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { users } = useUsers();
  const { pets } = usePetsContext();
  const { id } = useParams();
  const user = users.filter((item) => item.id === Number(id));
  const userPet = pets.filter((item) => item.userId === Number(id));
  return (
    <>
      <ProfileDescriptions user={user[0]} />
    </>
  );
};

export default Profile;
