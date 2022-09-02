import React from "react";
import { TextField } from "@mui/material";
import {
  BtnPadrao,
  ContainerPageLogin,
  ContainerForm,
} from "../../styles/globalStyles";
import InputPassword from "../../components/InputPassword";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "./styles";

const Cadastro = () => {
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Cadastre-se</TitleOrange>
        <p>Por favor preencha o dados abaixo para cadastrar!</p>
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label="E-mail"
            type="email"
            variant="outlined"
          />
          <InputPassword />
        </ThemeProvider>
        <BtnPadrao>ENTRAR</BtnPadrao>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Cadastro;
