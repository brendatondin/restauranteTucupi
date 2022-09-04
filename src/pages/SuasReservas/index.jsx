import React, { useState, useEffect } from "react";
import ModalDelete from "../../components/ModalDelete";
import {
  ContainerForm,
  ContainerCard,
  CardBox,
  SubTitle,
} from "../../styles/globalStyles";
import Card from "../../components/Card";
import { getReservasCliente }from '../../services/api.js'

const Reservas = () => {
  const [reserva, setReserva] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectReserva, setSelectedReserva] = useState("");

  const results = reserva.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.reserva.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  const handleLoadReq = async () => {
    setReserva(await getReservasCliente());
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    handleLoadReq();
  }, [handleChange]);

  return (
    <ContainerForm>
      <ContainerCard>
        {/* <SubTitle>Suas Reservas</SubTitle> */}
        <CardBox>
          {reserva.length > 0 &&
            results.map((item, index) => {
              return (
                <Card
                  key={index}
                  reserva={item.reserva}
                  nomeCliente={item.nomeCliente}
                  data={item.data}
                  hora={item.hora}
                  lugares={item.lugares}
                  email={item.email}
                  setIsOpen={setIsOpen}
                  setSelectedReserva={setSelectedReserva}
                />
              );
            })}
          {/* <ModalDelete
            isOpen={isOpen}
            setisOpen={setisOpen}
            selectReserva={selectReserva}
            handleLoad={handleLoadReq}
          /> */}
        </CardBox>
      </ContainerCard>
    </ContainerForm>
  );
};

export default Reservas;
