import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "../pages/Carrinho/Carrinho";
import Categoria from "../pages/Categoria/Categoria";
import Login from "../pages/Login/Login";
import Produtos from "../pages/Produtos/Produtos";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="./carrinho" element={<Carrinho />} />
          <Route path="./category" element={<Categoria />} />
          <Route path="./produtos" element={<Produtos />} />
          <Route path="./login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
