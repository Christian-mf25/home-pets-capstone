import { InferiorContainer } from "./styles";
import PetRegisterForm from "../PetRegisterForm";
import { useHistory } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogin } from "../../Providers/Login";

const InferiorMenuBar = () => {
  const history = useHistory();
  const { logOut } = useLogin();

  const handleClickProfile = () => {
    history.push("/profile");
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <InferiorContainer>
      <button onClick={handleClickProfile} className="icone iconeUm"></button>
      <PetRegisterForm />
      <button className="icone iconeTres">
        <ShoppingCartIcon />
      </button>
      <button onClick={handleLogout} className="icone iconeTres">
        <LogoutIcon />
      </button>
    </InferiorContainer>
  );
};

export default InferiorMenuBar;
