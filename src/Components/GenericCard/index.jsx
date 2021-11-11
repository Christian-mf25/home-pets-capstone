import { MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router";
import { CardContainer } from "./styles";

const GenericCard = ({ name }) => {
  const newName = name.toLowerCase();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/users/${newName}`);
  };

  return (
    <CardContainer onClick={() => handleClick(name)}>
      <div>
        <div>
          <p>buscar por</p>
        </div>
        <h2>{name}</h2>
      </div>
      <div className="icon">
        <MdKeyboardArrowRight size={50} color="#4D27D9" />
      </div>
    </CardContainer>
  );
};

export default GenericCard;