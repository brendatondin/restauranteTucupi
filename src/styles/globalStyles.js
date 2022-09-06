import styled, { createGlobalStyle } from "styled-components";
import { verde, branco, azule, gelo, Jost, preto } from "./variaveis";
import banner from "../assets/teste2.jpg";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
}

body,html{
    min-height: 100vh;
    width:100%;
    background-color: ${azule}; 
}
`;
export const BtnPadrao = styled.button`
  background-color: #4f523a;
  padding: 10px 50px;
  margin: 20px;
  cursor: pointer;
  box-shadow: (0px 4px 4px rgba(5, 5, 5, 0.5));
  border-radius: 10px;
  border: none;
  color: ${branco};
  ${Jost}
`;

export const Title = styled.h1`
  ${Jost}
  font-size: 80px;
  font-weight: 400;
  color: ${branco};
  @media (max-width: 500px) {
    font-size: 80px;
  }
`;

export const SubTitle = styled.h1`
  ${Jost}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 400;
  color: ${verde};
  @media (max-width: 500px) {
    font-size: 80px;
  }
`;

export const Text = styled.h1`
  ${Jost}
  font-size: 40px;
  font-weight: 400;
  color: ${preto};
  @media (max-width: 500px) {
    font-size: 80px;
  }
`;

export const ContainerPage = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${branco};
`;
export const ContainerPageLogin = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 650px;
  background-color: ${branco};
  background-position: center;
  background-size: cover;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1%;
  margin-top: 110px;
  gap: 20px;
  background-color: ${gelo};
  height: 500px;
  width: 600px;
  border-radius: 3%;
`;

export const ContainerBanner = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 150px;
  height: 420px;
  background: url(${banner});
  background-position: center;

  @media (max-width: 700px) {
    padding: 0 50px;
  }

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const ContainerMid = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-position: center;
  background-color: ${azule}; 
<<<<<<< HEAD
=======
  .imgContainer{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  }
  .btnHome{
    display: flex;
  justify-content: center;
  }
>>>>>>> f8139b4e43d37a7ff35fe663d7e9ff269fe2fe25

  @media (max-width: 700px) {
    padding: 0 50px;
  }

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const ContainerCard = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 100px 0;

  p {
    font-size: 50px;
    color: white;
  }
`;

export const CardBox = styled.div`
  min-height: auto;
  margin: 100px 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
`;
