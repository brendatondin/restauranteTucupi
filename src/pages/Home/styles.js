import styled from "styled-components";

export const ConteudoMid = styled `
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

