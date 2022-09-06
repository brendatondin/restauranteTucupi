import React from "react";
import { TextField } from "@mui/material";
import {
  BtnPadrao,
  ContainerPageLogin,
  ContainerForm,
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleGreen } from "./styles";
import InputPassword from "../../components/InputPassword";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <ContainerPageLogin>
      <ContainerForm>
      <BtnPadrao>Cliente</BtnPadrao>
      <BtnPadrao>Funcionário</BtnPadrao>

        <TitleGreen>Login</TitleGreen>
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
        <p>Não possue conta?
        <Link to="/cadastro">
          <span> Acesse</span>
        </Link>
        </p>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Login;
