import styled from "styled-components";

export const ContainerAnimals = styled.div`
  display: flex;
  max-width: 423px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 3px 3px 0 0;

  .header {
    background-color: #4d27d9;
    border-radius: 3px 3px 0 0;

    width: 100%;
    height: 78px;
    display: flex;
    align-items: center;
    h3 {
      color: #ffff;
      margin-left: 10px;
    }
  }
  .input {
    margin: 20px 0 10px 0;
    width: 90%;
  }
  .ContainerCard {
    display: flex;
    width: 100%;
    height: 133px;
    overflow-y: hidden;
  }
`;
