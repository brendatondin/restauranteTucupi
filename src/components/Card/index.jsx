import React from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardStyle } from "./styles";
import { Link } from "react-router-dom";

const Card = ({ reserva, nomeCliente, data, hora, lugares, email, setIsOpen, setSelectedReserva, setIsOpenEdit }) => {
  const handleReserva = () => {
    setIsOpen(true);
    setSelectedReserva(reserva.id);
  };

  const handleReservaEdit = () => {
    setIsOpenEdit(true);
    setSelectedReserva(reserva);
    console.log(reserva);
  }

  return (
    <CardStyle>
      <div className="infos">
        <h3>{reserva.id}</h3>
        <p>{nomeCliente}</p>
        <p>{data}</p>
        <p>{hora}</p>
        <p>{lugares}</p>
        <p>{email}</p>
        <div className="editReserva">
          <div className="icons">
              <BsPencilSquare color={"#000"} size={25} onClick={handleReservaEdit} />
            
            <GoTrashcan color={"#000"} size={25} onClick={handleReserva} />
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;
