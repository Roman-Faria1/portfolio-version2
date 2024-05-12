import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: #161616;
  width: 100%;
  height: 2%;

  display: flex;
  justify-content: space-between;

  padding: 20px;
  position: fixed;
  z-index: 9999;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    background-color: transparent;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 10%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin: 0;
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333333;
    padding: 10px;
  }
`;
const Logo = styled.img`
  height: 50px;
  @media only screen and (max-width: 768px) {
    height: 40px;
    padding-left: 10px;
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItemMobile = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &.active:after {
    width: 100%;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 10%;
  @media only screen and (max-width: 768px) {
    padding-right: 0px;
    padding-top: 15px;
    margin: 15px;
  }
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    margin: 10px;
  }
`;
const LogoMobile = styled.img`
  height: 50px;
  margin: 10px;

  @media only screen and (max-width: 768px) {
    display: block;
    height: 40px;
    padding-left: 10px;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const Button = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  width: 100px;
  height: 15px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  img {
    padding: 5px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Navbar = ({ activeLink, handleClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Section className="home">
      <Container>
        <LogoMobile src="./img/rf_logo_2.png"></LogoMobile>
        <Links menuOpen={menuOpen}>
          <Logo src="./img/rf_logo_2.png"></Logo>
          <ListItemMobile
            href="#home"
            onClick={() => {
              handleClick("home");
              setMenuOpen(false);
            }}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </ListItemMobile>
          <ListItemMobile
            href="#about"
            onClick={() => {
              handleClick("about");
              setMenuOpen(false);
            }}
            className={activeLink === "about" ? "active" : ""}
          >
            About
          </ListItemMobile>
          <ListItemMobile
            href="#projects"
            onClick={() => {
              handleClick("projects");
              setMenuOpen(false);
            }}
            className={activeLink === "projects" ? "active" : ""}
          >
            Projects
          </ListItemMobile>
          <ListItemMobile
            href="#contact"
            onClick={() => {
              handleClick("contact");
              setMenuOpen(false);
            }}
            className={activeLink === "contact" ? "active" : ""}
          >
            Contact
          </ListItemMobile>
        </Links>
        <Icons>
          <Button href="./img/RF-IT-Resume-2024-2.pdf" target="_blank">
            Resume <img src="./img/download.png" alt="" />
          </Button>
          <Icon src="./img/menu.png" onClick={handleMenuToggle}></Icon>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
