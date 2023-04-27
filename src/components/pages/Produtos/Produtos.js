import React from "react";
import { Card, Container, Imagem, Texto } from "./style";
const Produtos = (props) => {
  return (
    <Card>
      <h2>Nome:{props.nome} </h2>
      <ul>
        <Container>
          <div>
            Preço:<p>{props.preco}</p>
          </div>
          <div>
            Categoria:<p>{props.categoria}</p>
          </div>
          <div>
            Descrição:<p>{props.descricao}</p>
          </div>
          <div>
            Classficaçao <p>{props.classificacao}</p>
          </div>
          <div>
            Contagem: <p>{props.contagem}</p>
          </div>
          <br />
        </Container>
      </ul>

      <Imagem>
        <br />
        <img src={props.image} alt="" width="150px" height="150px" />
      </Imagem>
      <br />
    </Card>
  );
};
export default Produtos;
