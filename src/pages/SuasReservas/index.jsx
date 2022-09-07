import React, { useState, useEffect } from "react";
import ModalDelete from "../../components/ModalDelete";
/* import ModalEditar from "../../components/ModalEditar";
 */import {
  ContainerForm,
  ContainerCard,
  CardBox,
  SubTitle,
} from "../../styles/globalStyles";
import Card from "../../components/Card";
import { getTodasAsReservas, deleteReservas, putReservas } from '../../services/api.js'


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

  const deletar = async () => {
    await deleteReservas(selectReserva)
    setIsOpen(false)
    handleReload()
    console.log(selectReserva)
  }

  const handleChange = (key, target) => {
    setSelectedReserva({ ...selectReserva, [key]: target.value })
    console.log(selectReserva);

  }

  const atualiza = async () => {
    await putReservas(selectReserva.idReserva, selectReserva)
    setIsOpenEdit(false)
    handleReload()
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
    </ContainerForm>
  );
};

export default Reservas;
