import styled from "styled-components";
import logo from "../../Assets/img/Logo.svg";
import logo1 from "../../Assets/img/menuIcone1.svg";
import logo3 from "../../Assets/img/menuIcone3.svg";

export const SuperiorContainer = styled.div`
  background-color: #4d27d9;
  height: 66px;
  display: flex;
  justify-content: center;

  .divLogo {
    padding-top: 2px;
    button {
      height: 60px;
      width: 58px;
      background-color: transparent;
      border: none;
      background-image: url(${logo});
    }
    button:hover {
      cursor: pointer;
    }
  }

  .menuIcones {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;

    .menuIcones {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 210px;

      div {
        margin-right: 9px;
        width: 40px;
        height: 40px;
        margin-bottom: 10px;

        button {
          width: 40px;
          height: 40px;
        }
      }

      .icone {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: transparent;
        border: none;
        border-radius: 8px;
        width: 40px;
        height: 40px;
      }

      .icone:hover {
        cursor: pointer;
      }

      .iconeUm {
        background-image: url(${logo1});
        margin-right: 10px;
      }

      .iconeTres {
        color: #4d27d9;
        background-color: #fff;
        /* background-image: url(${logo3}); */
        margin-right: 10px;
      }
    }
  }
`;
