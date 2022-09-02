import styled from "styled-components";

export const conteudoMid = styled`
  display: flex;
  position: relative;
  flex-direction: column;
  @media (max-width: 1000px) {
    display: ${({ none }) => (none ? "flex" : "none")};
  }
`;

export const imgContainer = styled`
  display: flex;
   position: relative;
  margin-left: 40px;
  @media (max-width: 1000px) {
    display: ${({ none }) => (none ? "flex" : "none")};
  }
`;
