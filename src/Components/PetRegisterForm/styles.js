import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import logo2 from "../../Assets/img/menuIcone2.svg";

export const StyledPetButton = styled.div`
  button {
    background-image: url(${logo2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 8px;
    margin-top: 5px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const StyledDialog = styled(Dialog)`
  width: 315px;
  form {
    display: flex;
    flex-direction: column;

    .nomeType {
      .typePet {
        width: 215px;
      }
    }

    .buttonDiv {
      display: flex;
      justify-content: space-between;
      background-color: #4d27d9;
      padding-left: 12px;
      padding-right: 12px;
      height: 40px;
      align-items: center;
      color: #fff;

      button {
        color: #fff;
        background-color: transparent;
        border: none;
      }
      button:hover {
        cursor: pointer;
      }
    }

    .formDiv {
      padding: 10px;
      padding-left: 12px;
    }

    .inputForm {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .inputFormDescription {
      width: 230px;
    }

    .divSubmitButton {
      margin: 10px;
    }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 632px;
    .formDiv {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .MuiFormControl-root {
        width: 230px;
      }

      .nomeType {
        .typePet {
          margin-left: 30px;
          width: 222px;
        }
      }
    }
  }
`;
