import React from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function SideBar() {
  return (
    <Container>
      <HiOutlineMail />
      <FaWhatsapp />
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 5%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  /* box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05); */
  padding: 0 20px;
  position: fixed;

  svg {
    color: #4293b4;
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
  }

  svg:hover {
    color: #092f3c;
    cursor: pointer;
  }
`;
