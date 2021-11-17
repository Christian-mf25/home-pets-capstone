import styled from "styled-components";

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 389px;

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
    .Button {
      width: 90%;
    }
  }
`;
