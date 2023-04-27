import React from "react";
import { FaGithub } from "react-icons/fa";
import { FooterContainer, Rodape } from "./style";
const Footer = () => {
  return (
    <FooterContainer>
      <p> Rodape</p>
      <a href="https://github.com">
        <FaGithub />
        Github
      </a>
      <Rodape>All Rights Reserved</Rodape>
    </FooterContainer>
  );
};
export default Footer;
