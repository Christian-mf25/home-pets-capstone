import styled from "styled-components";

export const ContainerProfilePets = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  align-items: center;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    grid-gap: 30px;
  }
`;
