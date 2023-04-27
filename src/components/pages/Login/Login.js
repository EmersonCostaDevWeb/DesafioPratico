import React from "react";
import Container from "./style";
import { useNavigate } from "react-router-dom";
import { GotoProduct } from "../../Router/Coordinator";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h3>Pagina Login de usuario</h3>
      <p> Usuario:</p>
      <p> Senha:</p>
      <button onClick={() => GotoProduct(navigate)}>Voltar à Produtos</button>
    </Container>
  );
};
export default Login;
