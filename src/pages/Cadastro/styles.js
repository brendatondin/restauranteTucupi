import styled from "styled-components";
import { Title } from "../../styles/globalStyles";
import { marrom } from "../../styles/variaveis";

export const TitleOrange = styled(Title)`
  font-size: 50px;
  color: ${marrom};
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;
