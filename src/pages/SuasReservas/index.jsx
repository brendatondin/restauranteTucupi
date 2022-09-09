import React, { useState, useEffect } from "react";
import ModalDelete from "../../components/ModalDelete";
import ModalEditar from "../../components/ModalEditar";
import {
  ContainerCard,
  CardBox,
  BtnPadrao,
} from "../../styles/globalStyles";
import Card from "../../components/Card";
import { getTodasAsReservas, deleteReservas, putReservas, getReservasUmCliente } from '../../services/api.js'
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";


const Reservas = () => {
  const [reserva, setReserva] = useState([]);
  const [reload, setReload] = useState(false)
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectReserva, setSelectedReserva] = useState("");

  const handleLoadReq = async () => {
    const req = await getTodasAsReservas()
    setReserva(await req.data.reservas)
  };
  
  const handleReload = () => {
    setReload(true)
  }

  const deletar = async () => {
    await deleteReservas(selectReserva)
    setIsOpen(false)
    handleReload()
  }

  const handleChange = (key, target) => {
    setSelectedReserva({ ...selectReserva, [key]: target.value })
  }

  const atualiza = async () => {
    await putReservas(selectReserva.idReserva, selectReserva)
    setIsOpenEdit(false)
    handleReload()
  }

  const handleChangeUnico = (e) => {
    setValue(e.target.value);
  }

  const handlePesquisa = async (e) => {
    e.preventDefault()
    const resposta = await getReservasUmCliente(value)
    setReserva(resposta)
    setValue('')
  }


  useEffect(() => {
    handleLoadReq()
  }, [])

  useEffect(() => {
    if (reload) {
      handleLoadReq();
      setReload(false)
    }
  }, [reload]);


  return (
    
      <ContainerCard>
        <div className="divProcurar">
          <ThemeProvider theme={theme}>
          <TextField
              required
              id="outlined-required"
              label="Seu nome"
              value={value}
              onChange={handleChangeUnico}
            />
          </ThemeProvider>
          <BtnPadrao onClick={handlePesquisa}>Procurar</BtnPadrao>
        </div>
        <CardBox>
          {reserva &&
            reserva.map((item, index) => {
              return (
                <Card
                  key={index}
                  reserva={item}
                  nomeCliente={item.nomeCliente}
                  data={item.data}
                  hora={item.hora}
                  lugares={item.lugares}
                  email={item.email}
                  setIsOpen={setIsOpen}
                  setSelectedReserva={setSelectedReserva}
                  setIsOpenEdit={setIsOpenEdit}
                />
              );
            })}
          <ModalDelete
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectReserva={selectReserva}
            handleDelete={deletar}
            handleReload={handleReload}
          />
          <ModalEditar
            isOpenEdit={isOpenEdit}
            setIsOpenEdit={setIsOpenEdit}
            selectReserva={selectReserva}
            handleChange={handleChange}
            atualiza={atualiza}
          />
        </CardBox>
      </ContainerCard>
  );
};

export default Reservas;
