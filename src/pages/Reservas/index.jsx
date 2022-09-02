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
const Reservas = () => {
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <Text>Faça sua Reservas</Text>
        <h5>Por favor preencha os campos pra reservar</h5>
        <p>Atenção nosso ambiente suporta até 6 lugares por mesa</p>
        <ThemeProvider theme={theme}>
          <ResponsiveDatePickers />
          <BasicTimePicker />
          <SelectTextFields />
        </ThemeProvider>
        <BtnPadrao>Reservar</BtnPadrao>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Reservas;
