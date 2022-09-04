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
<<<<<<< HEAD
import { getReservasCliente } from "../../services/api";


=======
import { Link } from "react-router-dom";
>>>>>>> f8139b4e43d37a7ff35fe663d7e9ff269fe2fe25
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
<<<<<<< HEAD
        <BtnPadrao onClick={onClickButton}>Reservar</BtnPadrao>
=======
        <Link to="/login">
        <BtnPadrao>Reservar</BtnPadrao>
        </Link>
>>>>>>> f8139b4e43d37a7ff35fe663d7e9ff269fe2fe25
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Reservas;
