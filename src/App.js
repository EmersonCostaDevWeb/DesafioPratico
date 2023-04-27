import React from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./components/Router/Route";
import GlobalStyle from "./components/GlobasStyle";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
      <Router />
    </div>
  );
}
