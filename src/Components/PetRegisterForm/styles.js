import styled from "styled-components";
import { Dialog } from "@material-ui/core";

export const StyledDialog = styled(Dialog)`
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
    .formDiv {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .nomeType {
        .typePet {
          margin-left: 38px;
          padding: 0, 0, 12px, 0;
          width: 222px;
        }
      }
    }
  }
`;
