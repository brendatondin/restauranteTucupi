import React, { useState } from "react";
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
import { getReservasCliente } from "../../services/api";


const Reservas = () => {

  const [dados, setDados]= useState([])

    async function requisicao() {
      const response = await getReservasCliente("primeirohenry@gmail.com")
      setDados(response)
    }
    
    function onClickButton (e) {
      e.preventDefault();
      requisicao(getReservasCliente)
      console.log(dados)
  }

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
        <BtnPadrao onClick={onClickButton}>Reservar</BtnPadrao>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Reservas;
