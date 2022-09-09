import styled from "styled-components";
import { gelo, Jost, verde } from "../../styles/variaveis";

export const FooterStyled = styled.footer`
  display: flex;
  height: 330px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${verde};
  flex-direction: column;
  h3 {
    ${Jost}
    gap: 80px;
    color: ${gelo};
    font-size: 16px;
  }
  p {
    ${Jost}
    color: ${gelo};
    font-size: 16px;
    gap: 80px;
  }
  @media (max-width: 1250px) {
    padding: 0 40px;
  }
  @media (max-width: 800px) {
    align-items: center;
  }
  .sectionTop {
    @media (max-width: 800px) {
      justify-content: center;
    }
    .infos {
      height: 100%;
      display: flex;
      align-content: center;
      align-items: center;
      ${Jost}
      font-size: 16px;
      gap: 80px;
      color: ${gelo};
      @media (max-width: 1441px) {
        gap: 20px;
      }
      @media (max-width: 1250px) {
        gap: 20px;
      }
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
  hr {
    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
