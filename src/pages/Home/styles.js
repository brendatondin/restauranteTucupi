import styled from "styled-components";

<<<<<<< HEAD
//código morto?
export const conteudoMid = styled`
=======
export const ConteudoMid = styled `
>>>>>>> f8139b4e43d37a7ff35fe663d7e9ff269fe2fe25
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    display: ${({ none }) => (none ? "flex" : "none")};
  }
`;

export const ImgContainer = styled `
  display: flex;
  position: relative;
  margin-left: 40px;
  @media (max-width: 1000px) {
    display: ${({ none }) => (none ? "flex" : "none")};
  }
`;

