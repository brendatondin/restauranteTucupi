import styled, { css } from "styled-components";
import { marrom, branco } from "../../styles/variaveis";

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${marrom};
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(50px);

  .close {
    color: ${branco};
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 0.95;
      pointer-events: auto;
      transform: translateY(0);

      > svg {
        transform: rotate(0deg);
      }
    `}
`;
