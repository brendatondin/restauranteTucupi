import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import NavBar from "../NavBar";

export function MenuMobile({ menu, setMenu }) {
  useEffect(() => {
    document.body.style.overflowY = menu ? "hidden" : "auto";
  }, [menu]);

  return (
    <Container isVisible={menu}>
      <IoClose className="close" size={45} onClick={() => setMenu(false)} />
      <NavBar column gap none />
    </Container>
  );
}
