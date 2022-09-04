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
        <SubTitle>Nossa Equipe</SubTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque atque,
          id totam, officia voluptatum eos ex nam, saepe facere nisi ad
          veritatis. Similique est voluptas iure cumque obcaecati, voluptatibus
          consectetur?
        </p>
        <TimeContainer>
          <Time img={brenda} nome="brenda" titulo="Front-end" />
          <Time img={henry} nome="henry" titulo="Back-end" />
          <Time img={talysson} nome="talysson" titulo="Back-end" />
          <Time img={well} nome="well" titulo="Não sabe ainda" />
        </TimeContainer>
      </ContainerMid>
    </ContainerPage>
  );
};

export default Contato;
