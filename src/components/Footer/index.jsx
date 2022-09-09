import React from "react";
import { FooterStyled } from "./styles";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="sectionTop">
        <h3>Horário</h3>
        <p>Aberto de Segunda à Segunda 12h à 00h</p>
        <h3>Endereço</h3>
        <p>Rua da Paçoca 13 Jardim do Lulinha, RJ </p>
        <p>@2022 - todos os direitos reservados </p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
