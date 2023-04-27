import styled from "styled-components";

export const HeaderContainer = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: purple;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  color: #fff;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;
export const Lista = styled.ul`
  display: flex;
  gap: 22px;
  justify-content: space-evenly;
  font-size: 20px;
  font-weight: 500;
  height: 10vh;
  align-items: center;
  cursor: pointer;
`;
export const MenuLista = styled.li`
  list-style: none;
  text-decoration: none;
  margin: auto 0;
`;

export const Botao = styled.button`
  border: 2px solid back;
  border-radius: 12px;
  margin: 12px;
  padding: 6px;

  font-size: 22px;
  color: #fff;
  cursor: pointer;
  background-color: purple;
`;
