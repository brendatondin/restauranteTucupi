import React from "react";
import {
  ContainerBanner,
  ContainerPage,
  ContainerMid,
  SubTitle,
  Title,
} from "../../styles/globalStyles";
import { Time } from "../../components/Time/Time";
import Estudante from "../../assets/estudante.png";
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
          <Time img={Estudante} nome="Estudante" titulo="fiz o front" />
          <Time img={Estudante} nome="Estudante" titulo="fiz o back" />
        </TimeContainer>
      </ContainerMid>
    </ContainerPage>
  );
};

export default Contato;
