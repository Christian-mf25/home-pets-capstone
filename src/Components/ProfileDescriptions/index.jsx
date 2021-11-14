import pets from "../../Assets/img/pets-ong-filtro20-80.png";

const ProfileDescriptions = ({ user }) => {
  return (
    <>
      <div>
        {/* <img src={pets}></img> */}
        <h1>{user.name}</h1>
      </div>
      <div>
        <h2>Data de Fundação</h2>
        <p>{user.foundationDate}</p>
        <h2>Localização</h2>
        <p>{user.city}</p>
        <h2>Descrição</h2>
        <p>{user.description}</p>
        <h2>Cachorros</h2>
        <p>{user.numberOfDogs}</p>
        <h2>Gatos</h2>
        <p>{user.numberOfCats}</p>
      </div>
    </>
  );
};

export default ProfileDescriptions;
