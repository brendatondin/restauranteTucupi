import React from "react";
import { Link } from "react-router-dom";
import { NavBarStyled } from "../../components/NavBar/style";

const NavBar = ({ column, gap, none }) => {
  return (
    <NavBarStyled column={column} gap={gap} none={none}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reservas">Reservas</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre Nós</Link>
      </li>
      <li>
        <Link to="/suasReservas">Suas Reservas</Link>
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
