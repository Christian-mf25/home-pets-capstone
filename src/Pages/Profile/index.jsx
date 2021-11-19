import { useUsers } from "../../Providers/GetUsers";

import ProfileDescriptions from "../../Components/ProfileDescriptions";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { users } = useUsers();

  const { id } = useParams();
  const user = users.filter((item) => item.id === Number(id));

  return (
    <>
      <ProfileDescriptions user={user[0]} />
    </>
  );
};

export default Profile;
