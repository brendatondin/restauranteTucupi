import React from "react";
import {
  ContainerBanner,
  ContainerPage,
  ContainerMid,
  SubTitle,
  Title,
} from "../../styles/globalStyles";
import { Time } from "../../components/Time/Time";
import henry from "../../assets/henry.png";
import brenda from "../../assets/brenda.png";
import talysson from "../../assets/talysson.png";
import well from "../../assets/well.png";
import { TimeContainer } from "./styles";

const Contato = () => {
  return (
    <ContainerPage>
      <ContainerBanner>
        <Title>Sobre Nós</Title>
      </ContainerBanner>
      <ContainerMid>
        <SubTitle>Conheça Nosso Time</SubTitle>
        <TimeContainer>
          <Time img={brenda} nome="Brenda" titulo="Front-end" />
          <Time img={henry} nome="Henry" titulo="Back-end" />
          <Time img={talysson} nome="Talysson" titulo="Back-end" />
          <Time img={well} nome="Wellison" titulo="Product Owner" />
        </TimeContainer>
      </ContainerMid>
    </ContainerPage>
  );
};

export default Contato;
