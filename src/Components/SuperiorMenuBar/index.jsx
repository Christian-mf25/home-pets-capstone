import { useHistory } from "react-router-dom";
import PetRegisterForm from "../PetRegisterForm";
import { SuperiorContainer } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogin } from "../../Providers/Login";

const SuperiorMenuBar = () => {
  const { logOut } = useLogin();
  const history = useHistory();

  const handleclickLogo = () => {
    history.push("/home");
  };

  const handleClickProfile = () => {
    history.push("/profile");
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <SuperiorContainer>
      <div className="divLogo">
        <button onClick={handleclickLogo}></button>
      </div>
      <div className="menuIcones">
        <button onClick={handleClickProfile} className="icone iconeUm"></button>
        <PetRegisterForm />
        <button className="icone iconeTres">
          <ShoppingCartIcon />
        </button>
        <button onClick={handleLogout} className="icone iconeTres">
          <LogoutIcon />
        </button>
      </div>
    </SuperiorContainer>
  );
};

export default SuperiorMenuBar;
