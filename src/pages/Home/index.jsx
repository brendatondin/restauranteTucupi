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
          <SubTitle>+ brasiliedade</SubTitle>
          <div className="conteudoMid">
<<<<<<< HEAD
            <SubTitle>+ brasiliedade</SubTitle>
            <p>
              Nosso restaurante se encontra no centro da cidade, porém rodeado
              do frescor da natureza. Um refúgio brasileiro, fácil de chegar!
            </p>
            <Link to="/sobre">
              <BtnPadrao>Saiba Mais</BtnPadrao>
            </Link>
            <div className="imgContainer">
              <img src={obra} alt="obra" width={420} height={320} />
            </div>
=======
              <p>
                Nosso restaurante se encontra no centro da cidade, porém rodeado
                do frescor da natureza. Um refúgio brasileiro, fácil de chegar!
              </p>
            <div className="imgContainer">
              <img src={obra} alt="obra" width={420} height={320} />
            </div>
            <div className="btnHome">
              <Link to="/sobre">
                <BtnPadrao>Saiba Mais</BtnPadrao>
              </Link>
            </div>
>>>>>>> f8139b4e43d37a7ff35fe663d7e9ff269fe2fe25
          </div>
          <SubTitle>Ambiente</SubTitle>
          <div className="conteudoMid">
            <p>
<<<<<<< HEAD
            Cada ambiente foi pensado para que você se sinta em um 
            lugar tão especial quanto sua própria casa. Luz, conforto e conexão 
            com a natureza é aqui.
            </p>
            <BtnPadrao>Ambiente</BtnPadrao>
            <div className="imgContainer">
              <img src={espaco} alt="espaco" width={420} height={320} />
            </div>
=======
              Todos os ambientes foram pensado para que você se sinta em um
              lugar tão especial quanto sua própria casa. Luz, conforto e paz.
            </p>
            <div className="imgContainer">
              <img src={espaco} alt="espaco" width={420} height={320} />
            </div>
            <div className="btnHome">
            <BtnPadrao>Ambiente</BtnPadrao>
            </div>
>>>>>>> f8139b4e43d37a7ff35fe663d7e9ff269fe2fe25
          </div>
        </ContainerMid>
      </ContainerPage>
    </>
  );
};

export default Home;
