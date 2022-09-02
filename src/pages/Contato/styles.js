import styled from "styled-components";
import { Title } from "../../styles/globalStyles";
import { marrom } from "../../styles/variaveis";

export const TimeContainer = styled(Title)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  color: ${marrom};
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;
