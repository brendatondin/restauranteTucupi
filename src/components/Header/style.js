import styled from "styled-components";
import { branco, verde } from "../../styles/variaveis";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  background-color: ${verde};

  .hamburguer {
    display: none;
    color: ${branco};
  }

  @media (max-width: 1000px) {
    .hamburguer {
      display: flex;
    }
  }

  @media (max-width: 500px) {
    padding: 0 50px;

    img {
      width: 140px;
      height: 70px;
    }
  }
`;
