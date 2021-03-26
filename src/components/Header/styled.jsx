import styled from "styled-components";

export const Container = styled.div`
  background: #4293b4;

  .menu {
    /* max-width: 960px; */
    display: flex;
    margin: 0 auto;
    padding: 15px 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .menu a {
    color: white;
    text-decoration: none;
  }
  .menu-logo h1 {
    font-size: 2.25em;
    font-weight: bold;
    margin: 0px 10px;
    color: #ffff;
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
