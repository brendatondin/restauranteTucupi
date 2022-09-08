import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import SelectTextFields from "../../components/DropDown";
import BasicTimePicker from "../../components/HoraSelect";
import { theme } from "../../styles/variaveis";
import {
  BtnPadrao,
  ContainerPageLogin,
  ContainerForm,
  Text,
} from "../../styles/globalStyles";
import { postReservas } from "../../services/api";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect } from "react";
import moment from "moment/moment";

const Reservas = () => {
  const [dados, setDados] = useState({});
  const [valueData, setValueData] = React.useState(dayjs());

  const [valores, setValores] = useState({
    nomeCliente: "",
    data: '',
    hora: '',
    lugares: '',
    email: "",
  });

  async function requisicao() {
    const response = await postReservas(valores);
    setDados(response);
  }

  async function onClickButton(e) {
    e.preventDefault();
    console.log(valores);
    await requisicao(postReservas);
  }

  function handleChange(target, key) {
    const value = target.value;
    setValores({ ...valores, [key]: value });
    console.log(valores);

  }

   async function data (value) {
    const date =  moment(value).format("DD-MM-YYYY")
    return date
  }

  const handleChangeData = async (newValue) => {
    setValueData(newValue);
    const mes = await data(newValue.$d)
    setValores({
      ...valores,
      data:mes,
    });

  };

  useEffect(()=>{
    console.log(valores)
  }, [valores])

  return (
    <ContainerPageLogin>
      <ContainerForm>
        <Text>Faça sua reserva</Text>
        <h5>Por favor preencha os campos pra reservar</h5>
        <p>Atenção nosso ambiente suporta até 6 lugares por mesa.</p>
        <ThemeProvider theme={theme}>
          <TextField
            required
            id="outlined-required"
            label="Seu nome"
            defaultValue=""
            onChange={({ target }) => handleChange(target, "nomeCliente")}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Data"
                inputFormat="DD/MM/YYYY"
                disablePast={true}
                value={valueData}
                onChange={handleChangeData}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          <BasicTimePicker
            setValores={setValores}
            valores={valores}
            value={valores.hora}
            onChange={({ target }) => handleChange(target.value, "hora")}
          />

          <SelectTextFields
          value={valores.lugares}
          onChange={({ target }) => handleChange(target.value, "lugares")}
          />
          <TextField
            required
            id="outlined-required"
            label="Seu e-mail"
            onChange={({ target }) => handleChange(target, "email")}
          />
        </ThemeProvider>
        <BtnPadrao onClick={onClickButton}>Reservar</BtnPadrao>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Reservas;
