import api from "../../Services/api/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenericCard from "../../Components/GenericCard";
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

  return (
    <>
      <div>
        <input placeholder="Pesquisa Avançada" />
        <div>
          {newUsers.map((item, index) => (
            <GenericCard flag={false} name={item.name}></GenericCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
