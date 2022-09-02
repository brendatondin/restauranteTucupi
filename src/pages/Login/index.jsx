import React from "react";
import { TextField } from "@mui/material";
import {
  BtnPadrao,
  ContainerPageLogin,
  ContainerForm,
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "./styles";
import InputPassword from "../../components/InputPassword";

const Login = () => {
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Login</TitleOrange>
        <p>Por favor preencha o dados abaixo para começar!</p>
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label="E-mail"
            type="email"
            variant="outlined"
          />
          <InputPassword></InputPassword>
        </ThemeProvider>
        <BtnPadrao>ENTRAR</BtnPadrao>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Login;
