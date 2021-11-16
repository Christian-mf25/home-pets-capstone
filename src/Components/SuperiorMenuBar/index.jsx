import { useHistory } from "react-router-dom";
import PetRegisterForm from "../PetRegisterForm";
import { SuperiorContainer } from "./styles";

const SuperiorMenuBar = () => {
  const history = useHistory();

  const handleclickLogo = () => {
    history.push("/home");
  };

  const handleClickProfile = () => {
    history.push("/profile");
  };

  return (
    <SuperiorContainer>
      <div className="divLogo">
        <button onClick={handleclickLogo}></button>
      </div>
      <div className="menuIcones">
        <button onClick={handleClickProfile} className="icone iconeUm"></button>
        <PetRegisterForm />
        <button className="icone iconeTres"></button>
      </div>
    </SuperiorContainer>
  );
};

export default SuperiorMenuBar;
