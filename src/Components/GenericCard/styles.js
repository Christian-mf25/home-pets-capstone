import styled from "styled-components";
import pets from "../../Assets/img/pets-ong-filtro20-80.png";

export const CardContainer = styled.div`
  background-image: url(${pets});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  padding-left: 20px;
  padding-right: 20px;

  div {
    div {
      text-align: center;
      border-radius: 8px;
      width: 95px;
      background-color: #fce785;
    }
    h2 {
      color: #4d27d9;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 720px) {
    width: auto;
    height: 100px;
  }

  @media (min-width: 1024px) {
    width: 390px;
    height: 130px;
  }
`;
