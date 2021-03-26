import React from "react";
import { Container } from "./styled";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <Container>
      <div className="menu">
        <div className="menu-logo">
          <h1>Logo</h1>
        </div>
        <nav className="menu-nav">
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#Contact">
                <HiOutlineMail />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#Contact">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default Header;
