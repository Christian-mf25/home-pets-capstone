import styled from "styled-components";

export const ContainerProfilePets = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
