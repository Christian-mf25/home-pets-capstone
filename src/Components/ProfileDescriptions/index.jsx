import { useUsers } from "../../Providers/GetUsers";
const ProfileDescriptions = () => {
  const { users } = useUsers();
  console.log(users);
  return (
    <>
      <div>
        <img></img>
        <h1>Title</h1>
      </div>
      <div>
        <h2>Data de Fundação</h2>
        <h2>Localização</h2>
        <h2>Descrição</h2>
        <h2>Cachorros</h2>
        <h2>Gatos</h2>
      </div>
    </>
  );
};

export default ProfileDescriptions;
