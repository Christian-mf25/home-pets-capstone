import styled from "styled-components";

export const ContainerGeneral = styled.div`
  background: linear-gradient(to bottom, #a592eb 16%, #ffff 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;

  @media (min-width: 420px) {
    background: linear-gradient(to bottom, #a592eb 33%, #ffff 10%);
  }
  @media (min-width: 768px) {
    background: linear-gradient(to bottom, #a592eb 33%, #ffff 10%);
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;
