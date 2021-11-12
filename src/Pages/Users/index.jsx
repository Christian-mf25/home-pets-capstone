import api from "../../Services/api/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenericCard from "../../Components/GenericCard";
import { UserContainer } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [searchUser, setSearchUser] = useState("");

  const newId = id === "ongs" ? "ONG" : id === "empresas" ? "PJ" : "PF";

  useEffect(() => {
    api
      .get("users/")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);
  const newUsers = users.filter((item) => item.type === newId);
  const filterUser = users.filter(
    (item) => item.name.toLowerCase() === searchUser.toLowerCase()
  );
  console.log(searchUser);
  return (
    <>
      <input
        placeholder="Pesquisa Avançada"
        value={searchUser}
        onChange={(event) => setSearchUser(event.target.value)}
      />
      <UserContainer>
        {filterUser.length > 0
          ? filterUser.map((item, index) => (
              <GenericCard flag={false} name={item.name}></GenericCard>
            ))
          : newUsers.map((item, index) => (
              <GenericCard flag={false} name={item.name}></GenericCard>
            ))}
        ;
      </UserContainer>
    </>
  );
};

export default Users;
