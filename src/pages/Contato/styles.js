import styled from "styled-components";
import { Title } from "../../styles/globalStyles";
import { verde } from "../../styles/variaveis";

export const TimeContainer = styled(Title)`
  display: grid;
  grid-template-columns: auto auto ;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  color: ${verde};
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;
