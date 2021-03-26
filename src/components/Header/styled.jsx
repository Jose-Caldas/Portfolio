import styled from "styled-components";

export const Container = styled.div`
  background-color: #4294b4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);

  .menu {
    display: flex;
    margin: 0 auto;
    padding: 15px 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .menu a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  .menu-logo h1 {
    font-size: 2.25em;
    margin: 0px 10px;
    color: #092f3c;
  }
  .menu-nav {
    display: flex;
    flex-wrap: wrap;
  }
  .menu nav a {
    font-size: 1.25em;
    display: block;
    padding: 10px;
  }
  .menu nav a:hover {
    color: #172b4d;
  }
`;
