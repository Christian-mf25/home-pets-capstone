import { ContainerPetCard } from "../CardPetProfile/styles";
import { PrimaryButton } from "../../Styles/global";
const CardPetProfile = ({ pet }) => {
  return (
    <>
      <ContainerPetCard>
        <div className="header">
          <h3>Name</h3>
        </div>
        <div>
          <h3>Biografia</h3>
          <p>Descrição</p>
        </div>
        <PrimaryButton>Adotar</PrimaryButton>
      </ContainerPetCard>
    </>
  );
};

export default CardPetProfile;
