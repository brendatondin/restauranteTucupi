import React from "react";
import { ThemeProvider } from "@mui/material";
import SelectTextFields from "../../components/DropDown";
import ResponsiveDatePickers from "../../components/DataCalendar";
import BasicTimePicker from "../../components/HoraSelect";
import { theme } from "../../styles/variaveis";
import {
  BtnPadrao,
  ContainerPageLogin,
  ContainerForm,
  Text,
} from "../../styles/globalStyles";
import { Link } from "react-router-dom";
const Reservas = () => {
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <Text>Faça sua reserva</Text>
        <h5>Por favor preencha os campos pra reservar</h5>
        <p>Atenção nosso ambiente suporta até 6 lugares por mesa.</p>
        <ThemeProvider theme={theme}>
          <ResponsiveDatePickers />
          <BasicTimePicker />
          <SelectTextFields />
        </ThemeProvider>
        <Link to="/login">
        <BtnPadrao>Reservar</BtnPadrao>
        </Link>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Reservas;
