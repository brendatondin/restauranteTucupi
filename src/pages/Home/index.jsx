import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dashi from "../../assets/dashi.png";
import espaco from "../../assets/espaco.png";
import obra from "../../assets/obra.png";
import Loading from "../../components/Loading/Loading";
import { BtnPadrao } from "../../styles/globalStyles";
import {
  ContainerBanner,
  ContainerPage,
  ContainerMid,
  Title,
  SubTitle,
} from "../../styles/globalStyles";

const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    {loading ? <Loading/> : 
    
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
          </div>
          <SubTitle>Ambiente</SubTitle>
          <div className="conteudoMid">
            <p>
              Todos os ambientes foram pensado para que você se sinta em um
              lugar tão especial quanto sua própria casa. Luz, conforto e paz.
            </p>
            <div className="imgContainer">
              <img src={espaco} alt="espaco" width={420} height={320} />
            </div>
            <div className="btnHome">
            <BtnPadrao>Ambiente</BtnPadrao>
            </div>
          </div>
        </ContainerMid>
      </ContainerPage>
    }
    </>
  );
};

export default Home;
