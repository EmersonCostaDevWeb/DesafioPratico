import React, { useState } from "react";
import { MainContainer, Botao } from "./style";
import Produtos from "../pages/Produtos/Produtos";
const Main = () => {
  const [produto, setProdutos] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setProdutos(data);
  };

  return (
    <MainContainer>
      <div>
        {produto.map((item) => {
          return (
            <Produtos
              key={item.id}
              nome={item.title}
              preco={item.price}
              categoria={item.category}
              descricao={item.description}
              image={item.image}
              classificacao={item.rating.rate}
              contagem={item.rating.count}
            />
          );
        })}
        <Botao onClick={fetchData}>Listar produtos</Botao>
      </div>
    </MainContainer>
  );
};

export default Main;
