import React from "react";
import { Container } from "./styled";
// import { Route, Link, Switch } from "react-router-dom";

function Header() {
  return (
    <Container>
      <div className="menu">
        <div className="menu-logo">
          <h1>José Caldas</h1>
        </div>
        <nav className="menu-nav">
          <a href="#about">About</a>

          <a href="#portfolio">Portfolio</a>

          <a href="#Contact">Contact</a>
        </nav>
      </div>
    </Container>
  );
}

export default Header;
