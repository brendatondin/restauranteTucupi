import React, { useState, useEffect } from "react";
import ModalDelete from "../../components/ModalDelete";
<<<<<<< HEAD
import {
=======
/* import ModalEditar from "../../components/ModalEditar";
 */import {
>>>>>>> 25247de692ce3501b174b03dae360e6f096b89ee
  ContainerForm,
  ContainerCard,
  CardBox,
  SubTitle,
} from "../../styles/globalStyles";
import Card from "../../components/Card";
<<<<<<< HEAD
import { getReservasCliente, deleteReservas } from '../../services/api.js'
import ModalEditar from "../../components/ModalEditar";
=======
import { getTodasAsReservas, deleteReservas } from '../../services/api.js'
>>>>>>> 25247de692ce3501b174b03dae360e6f096b89ee


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

  const handleDelete = async () => {
    await deleteReservas(selectReserva)
    setIsOpen(false)
    handleReload()
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
<<<<<<< HEAD
          <ModalEditar
            isOpenEdit={isOpenEdit}
            setIsOpenEdit={setIsOpenEdit}
            selectReserva={selectReserva}
            handleChange={handleChange}
          />
=======
          {/* <ModalEditar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectReserva={selectReserva}
          handleEditar={handleEditar}
          handleReload={handleReload}
          /> */}
>>>>>>> 25247de692ce3501b174b03dae360e6f096b89ee
        </CardBox>
      </ContainerCard>
    </ContainerForm>
  );
};

export default Reservas;
