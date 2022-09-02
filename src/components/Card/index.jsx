import React from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardStyle } from "./styles";
import { Link } from "react-router-dom";

const Card = ({ img, produto, desc, preco, setIsOpen, setSelectedProduct }) => {
  const handleProduct = () => {
    setIsOpen(true);
    setSelectedProduct(produto);
  };

  return (
    <CardStyle>
      <figure>
        <img src={img} alt="produto" />
      </figure>
      <div className="infos">
        <h3>{produto.toUpperCase()}</h3>
        <p>{desc}</p>
        <div className="editPrice">
          <div className="icons">
            <Link to="">
              <BsPencilSquare color={"#000"} size={25} />
            </Link>
            <GoTrashcan color={"#000"} size={25} onClick={handleProduct} />
          </div>
          <h4>
            a partir de:<span>R${preco}</span>
          </h4>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;
