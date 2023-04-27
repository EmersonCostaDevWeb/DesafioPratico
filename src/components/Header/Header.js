import logo from "../img/logo.png";
import React from "react";

import { HeaderContainer, Logo, Lista, MenuLista, Botao } from "./style";

const Header = (props) => {
  console.log(props);
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="logo-store" height="50px" width="50px" />
        <h2>Online Store</h2>
      </Logo>
      <Lista>
        <MenuLista>
          <Botao>Produto</Botao>
        </MenuLista>

        <MenuLista>
          <Botao>Categoria</Botao>
        </MenuLista>

        <MenuLista>
          <Botao>Carrinho</Botao>
        </MenuLista>

        <MenuLista>
          <Botao> Login</Botao>
        </MenuLista>
      </Lista>
    </HeaderContainer>
  );
};
export default Header;
