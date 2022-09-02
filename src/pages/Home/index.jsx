import React from "react";
import { Link } from "react-router-dom";
import dashi from "../../assets/dashi.png";
import espaco from "../../assets/espaco.png";
import obra from "../../assets/obra.png";
import { BtnPadrao } from "../../styles/globalStyles";
import {
  ContainerBanner,
  ContainerPage,
  ContainerMid,
  Title,
  SubTitle,
} from "../../styles/globalStyles";

const Home = () => {
  return (
    <>
      <ContainerPage>
        <ContainerBanner>
          <Title>Comida com sabor de Brasil</Title>
          <Link to="/reservas">
            <BtnPadrao>
              <img src={dashi} alt="dashi" width={14} />
              Reservar sua mesa
            </BtnPadrao>
          </Link>
        </ContainerBanner>
        <ContainerMid>
          <div className="conteudoMid">
            <SubTitle>+ brasiliedade</SubTitle>
            <p>
              Nosso restaurante se encontra no centro da cidade, porém rodeado
              do frescor da natureza. Um refúgio brasileiro, fácil de chegar!
            </p>
            <Link to="/sobre">
              <BtnPadrao>Saiba Mais</BtnPadrao>
            </Link>
          </div>
          <div className="imgContainer">
            <img src={obra} alt="obra" width={420} height={320} />
          </div>
          <div className="conteudoMid">
            <SubTitle>Ambiente</SubTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              atque, id totam, officia voluptatum eos ex nam, saepe facere nisi
              ad veritatis. Similique est voluptas iure cumque obcaecati,
              voluptatibus consectetur?
            </p>
          </div>
          <BtnPadrao>Ambiente</BtnPadrao>
          <div className="imgContainer">
            <img src={espaco} alt="espaco" width={420} height={320} />
          </div>
        </ContainerMid>
      </ContainerPage>
    </>
  );
};

export default Home;
