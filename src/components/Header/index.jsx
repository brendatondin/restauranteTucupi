import React, { useState } from "react";
import { HeaderStyled } from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { MenuMobile } from "../MenuMobile";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <MenuMobile menu={menu} setMenu={setMenu} />
      <HeaderStyled>
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>
        <NavBar />
        <AiOutlineMenu
          className="hamburguer"
          size={45}
          onClick={() => setMenu(true)}
        />
      </HeaderStyled>
    </>
  );
};

export default Header;
