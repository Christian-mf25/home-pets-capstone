import styled from "styled-components";

export const HomeContainer = styled.div`
  border: 1px solid #f5f5f5;

  .mapContainer {
    height: 150px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  @media (min-width: 720px) {
    display: flex;
    width: 670px;
    margin: 0 auto;
    align-items: center;

    .cardsContainer {
      /* width: 250px; */
    }

    .mapContainer {
      height: 400px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 950px;
    margin: 0 auto;

    .cardsContainer {
      flex-direction: column;
      flex-wrap: wrap;
    }

    .mapContainer {
      width: 600px;
    }
  }
`;
