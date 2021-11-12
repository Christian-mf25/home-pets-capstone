import styled from "styled-components";

export const RegisterContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 750px;
    justify-content: space-between;
  }

  @media (min-width: 720px) {
    form {
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: center; */
      height: 350px;
    }
  }
`;
