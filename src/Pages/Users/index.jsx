import { useUsers } from "../../Providers/GetUsers";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GenericCard from "../../Components/GenericCard";
import { UserContainer } from "./styles";
import { Input } from "../../Styles/global";

const Users = () => {
  const { id } = useParams();
  const [searchUser, setSearchUser] = useState("");

  const newId = id === "ongs" ? "ONG" : id === "empresas" ? "PJ" : "PF";

  const { users } = useUsers();
  const newUsers = users.filter((item) => item.type === newId);

  //Listar somente pesquisado através do campo de busca
  const filterUser = users.filter(
    (item) => item.name?.toLowerCase() === searchUser.toLowerCase()
  );

  return (
    <>
      <UserContainer>
        <Input
          className="Input"
          placeholder="Pesquisa Avançada"
          value={searchUser}
          onChange={(event) => setSearchUser(event.target.value)}
        />

        {filterUser.length > 0
          ? filterUser.map((item, index) => (
              <GenericCard
                flag={false}
                name={item.name}
                item={item}
              ></GenericCard>
            ))
          : newUsers.map((item, index) => (
              <GenericCard
                flag={false}
                name={item.name}
                item={item}
              ></GenericCard>
            ))}
      </UserContainer>
    </>
  );
};

export default Users;
