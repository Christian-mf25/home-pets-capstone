import styled from "styled-components";
export const ContainerPetCard = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  .header {
    background-color: var(--color-secondary);
    border-radius: 3px;
    height: 50px;

    h3 {
      color: white;
      padding: 10px;
    }
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    min-width: 320px;
  }
`;
