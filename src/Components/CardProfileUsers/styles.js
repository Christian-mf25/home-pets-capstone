import styled from "styled-components";

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 5px;

  .ContainerHeader {
    border-radius: 3px 3px 0 0;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 195px;
    background-color: var(--color-secondary);
    img {
      width: 103px;
      border-radius: 50%;
    }
    h1 {
      color: var(--color-gray-0);
    }
  }

  .ContainerDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffff;

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
  .Icon {
    margin-right: 10px;
    font-size: 20px;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
`;
