import styled from "styled-components";
import logo1 from "../../Assets/img/menuIcone1.svg";
import logo3 from "../../Assets/img/menuIcone3.svg";

export const InferiorContainer = styled.div`
  background-color: #4d27d9;
  height: 66px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  div {
    height: 45px;
    margin-right: 10px;
  }

  .icone {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 8px;
  }
  .icone:hover {
    cursor: pointer;
  }

  .iconeUm {
    background-image: url(${logo1});
    margin-right: 10px;
  }

  .iconeTres {
    background-color: #fff;
    color: #4d27d9;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
