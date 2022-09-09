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
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const Reservas = () => {
  const [dados, setDados] = useState({});
  const [valueData, setValueData] = React.useState(dayjs());
  const [reserva, setReserva] = useState(false);

  const [valores, setValores] = useState({
    nomeCliente: "",
    data: '',
    hora: '',
    lugares: '',
    email: "",
  });

  const Navigate = useNavigate();

  async function requisicao() {
      const response = await postReservas(valores);
        setDados(response);
        return response
  }

  async function onClickButtonRotaPost(e) {
    e.preventDefault();
    const req = await requisicao(postReservas);
    setReserva(true)
  }

  function onClickSuasReservas(e) {
    e.preventDefault();
    Navigate("/suasReservas")

  }


  function handleChange(target, key) {
    const value = target.value;
    setValores({ ...valores, [key]: value });

  }

  async function data(value) {
    const date = moment(value).format("DD-MM-YYYY")
    return date
  }

  const handleChangeData = async (newValue) => {
    setValueData(newValue);
    const mes = await data(newValue.$d)
    setValores({
      ...valores,
      data: mes,
    });

  };


  return (
    <ContainerPageLogin>
      {reserva ? 
      <ContainerForm>
        <p>Reserva Efetuada com Sucesso</p>
        <BtnPadrao onClick={onClickSuasReservas}>Ok</BtnPadrao>
      </ContainerForm>
      :
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
          />

          <SelectTextFields
            setValores={setValores}
            valores={valores}
          />
          <TextField
            required
            id="outlined-required"
            label="Seu e-mail"
            onChange={({ target }) => handleChange(target, "email")}
          />
          <BtnPadrao onClick={onClickButtonRotaPost}>Reservar</BtnPadrao>

        </ThemeProvider>

      </ContainerForm>
      }
    </ContainerPageLogin>
  );
};

export default Reservas;
