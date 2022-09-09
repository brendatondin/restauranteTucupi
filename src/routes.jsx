import React from "react";
import { BrowserRouter, Routes as Switcher, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservas from "./pages/Reservas";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
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
          <Route path="/sobre" element={<Contato />} />
          <Route path="/suasReservas" element={<ReservasFetch />} />
        </Switcher>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
