import React, { useState, useEffect } from "react";
import ModalDelete from "../../components/ModalDelete";
import {
  ContainerForm,
  ContainerCard,
  CardBox,
  SubTitle,
} from "../../styles/globalStyles";
import Card from "../../components/Card";

const ReservasFetch = () => {
  const [infos, setInfos] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedReserva] = useState("");

  const results = infos.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.produto.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  const handleLoadReq = async () => {
    setInfos(await getProdutos());
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
          {infos.length > 0 &&
            results.map((item, index) => {
              return (
                <Card
                  key={index}
                  // img={item.img}
                  produto={item.produto}
                  desc={item.descricao}
                  preco={item.valor}
                  setIsOpen={setIsOpen}
                  setSelectedReserva={setSelectedReserva}
                />
              );
            })}
          <ModalDelete
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedProduct={selectedProduct}
            handleLoad={handleLoadReq}
          />
        </CardBox>
      </ContainerCard>
    </ContainerForm>
  );
};

export default ReservasFetch;
