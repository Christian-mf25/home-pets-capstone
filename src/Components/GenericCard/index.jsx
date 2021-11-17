import { MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router";
import { CardContainer, CardPets } from "./styles";

const GenericCard = ({ flag, name, item, cardType, idPet }) => {
  const newName = name.toLowerCase();
  const history = useHistory();
  const handleClick = () => {
    if (cardType === "petCard") {
      history.push(`/profile/pet/${idPet}`);
    } else if (flag) {
      history.push(`/users/${newName}`);
    } else {
      history.push(`/profile/${item.id}`);
    }
  };

  return (
    <>
      {cardType === "petCard" ? (
        <CardPets onClick={() => handleClick(name)}>
          <div>
            <div>{flag ? <p>buscar por</p> : <p>selecionar</p>}</div>
            <h2>{name}</h2>
          </div>
          <div className="icon">
            <MdKeyboardArrowRight size={50} color="#4D27D9" />
          </div>
        </CardPets>
      ) : (
        <CardContainer onClick={() => handleClick(name)}>
          <div>
            <div>{flag ? <p>buscar por</p> : <p>selecionar</p>}</div>
            <h2>{name}</h2>
          </div>
          <div className="icon">
            <MdKeyboardArrowRight size={50} color="#4D27D9" />
          </div>
        </CardContainer>
      )}
    </>
  );
};

export default GenericCard;
