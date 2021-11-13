import { useHistory } from "react-router";
import GenericCard from "../../Components/GenericCard";
import PetRegisterForm from "../../Components/PetRegisterForm";
import { HomeContainer } from "./styles";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const history = useHistory();

  if (!token) {
    history.push("/login");
  }

  return (
    <HomeContainer>
      <PetRegisterForm />
      <GenericCard name="ONGs" />
      <GenericCard name="Empresas" />
      <GenericCard name="Pessoas" />
    </HomeContainer>
  );
};

export default Home;
