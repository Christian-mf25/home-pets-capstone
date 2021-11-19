import { ContainerPetCard } from "../CardPetProfile/styles";
import { PrimaryButton } from "../../Styles/global";
const CardPetProfile = ({ pet, emailOng }) => {
  return (
    <>
      <ContainerPetCard>
        <div className="header">
          <h3>{pet.name}</h3>
        </div>
        <div>
          <h3>Biografia</h3>
          <p>{pet.description}</p>
        </div>
        <PrimaryButton>
          <a
            href={`mailto:${emailOng}?subject=${"Título"}&body=${"Body to email"}
`}
          >
            Adotar
          </a>
        </PrimaryButton>
      </ContainerPetCard>
    </>
  );
};

export default CardPetProfile;
