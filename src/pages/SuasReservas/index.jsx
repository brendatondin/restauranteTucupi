import React, { useState, useEffect } from "react";
import ModalDelete from "../../components/ModalDelete";
import ModalEditar from "../../components/ModalEditar";
import {
  ContainerForm,
  ContainerCard,
  CardBox,
  SubTitle,
} from "../../styles/globalStyles";
import Card from "../../components/Card";
import { getTodasAsReservas, deleteReservas } from '../../services/api.js'


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
const handleEditar = (e) => {
  setValue(e.target.value);
}

  const handleReload = () => {
    setReload(true)
  }

  const handleDelete = async () => {
    await deleteReservas(selectReserva)
    setIsOpen(false)
    handleReload()
    console.log(selectReserva)
  }

  const handleChange = (key, target) => {
    setSelectedReserva({ ...selectReserva, [key]: target.value })
    console.log(selectReserva);
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
    <ContainerForm>
      <ContainerCard>
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
            handleDelete={handleDelete}
            handleReload={handleReload}
          />
          <ModalEditar
          isOpenEdit={isOpenEdit}
          setIsOpenEdit={setIsOpenEdit}
          selectReserva={selectReserva}
          handleChange={handleChange}

          />
        </CardBox>
      </ContainerCard>
    </ContainerForm>
  );
};

export default Reservas;
