import styled from "styled-components";

export const ContainerGeneral = styled.div`
  background: linear-gradient(to bottom, #a592eb 41%, #ffff 29%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    background: linear-gradient(to bottom, #a592eb 33%, #ffff 10%);
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }

  .ContainerDetails {
    display: flex;
    flex-direction: column;
    max-width: 389px;
  }
  .ContainerHeader {
    border-radius: 3px 3px 0 0;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 195px;
    background-color: #4d27d9;
    img {
      width: 103px;
      border-radius: 50%;
    }
    h1 {
      color: #ffff;
    }
  }

  .ContainerDetails {
    display: flex;
    flex-direction: column;
    align-items: center;

    .Details {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0 15px 0;
    }
    .DetailsDescription {
      margin-top: 5px;
      width: 90%;
      display: flex;
      flex-direction: column;
      h2 {
        margin-bottom: 20px;
      }
    }
  }
  .Button {
    width: 90%;
  }
`;

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
`;
