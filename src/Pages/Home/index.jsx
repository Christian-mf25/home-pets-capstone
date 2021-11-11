import { useHistory } from "react-router";
import GenericCard from "../../Components/GenericCard";
import { HomeContainer } from "./styles";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const history = useHistory();

  if (!token) {
    console.log("não tem token não bicho");
    history.push("/login");
  }

  return (
    <HomeContainer>
      <GenericCard name="ONGs" />
      <GenericCard name="Empresas" />
      <GenericCard name="Pessoas" />
    </HomeContainer>
  );
};

export default Home;
