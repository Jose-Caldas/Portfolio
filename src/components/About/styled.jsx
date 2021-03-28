import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  margin: 5rem 5rem;
  /* background-color: #fff; */
  border-top: 1px solid #d4e9ff;
  padding: 1.5rem 0;

  h1 {
    text-align: center;
    color: #092f3c;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--white);
    text-align: center;
    font-size: 1.8rem;
    margin: 3rem 0;
  }

  p {
    max-width: 900px;
    display: flex;
    justify-content: center;
    color: #092f3c;

    text-align: center;
    font-size: 1.5rem;
    margin: 20px auto;
    line-height: 3rem;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  ul li {
    background: #4293b4;
    margin-left: 30px;
    padding: 15px 20px;
    color: var(--white);
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;
