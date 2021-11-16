import styled from "styled-components";

export const ContainerGeneral = styled.div`
  background: linear-gradient(to bottom, #a592eb 31%, #ffff 29%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerAllDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeader = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 195px;
  background-color: #4d27d9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    border-radius: 50%;
    width: 103px;
    height: 103px;
  }
`;
export const ContainerDetails = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerDescription = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
