import React from "react";
import { BrowserRouter, Routes as Switcher, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservas from "./pages/Reservas";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles/globalStyles";
import Cadastro from "./pages/Cadastro";
import Contato from "../src/pages/Contato";
import ReservasFetch from "../src/pages/SuasReservas/index";

const Routes = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switcher>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/suasReservas" element={<ReservasFetch />} />
        </Switcher>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
