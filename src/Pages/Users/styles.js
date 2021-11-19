import styled from "styled-components";

export const UserContainer = styled.div`
  border: 1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  .Input {
    width: 369px;
    margin: 0 auto;
  }

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 670px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 950px;
    margin: 0 auto;
  }
`;
