import styled from "styled-components";

//código morto?
export const conteudoMid = styled`
  display: flex;
  align-items: center;
  justify-content: center;
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
