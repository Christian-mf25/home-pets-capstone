import { InferiorContainer } from "./styles";
import PetRegisterForm from "../PetRegisterForm";
import { useHistory } from "react-router";

const InferiorMenuBar = () => {
  const history = useHistory();
  const handleClickProfile = () => {
    history.push("/profile");
  };

  return (
    <InferiorContainer>
      <button onClick={handleClickProfile} className="icone iconeUm"></button>
      <PetRegisterForm />
      <button className="icone iconeTres"></button>
    </InferiorContainer>
  );
};

export default InferiorMenuBar;
