import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10rem 8rem;

  .content {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #d4e9ff;
    padding: 0 20px;
    background-color: #fff;

    h1 {
      color: #092f3c;
      font-size: 2.5rem;
      line-height: 3rem;
    }

    h2 {
      color: var(--gray200);
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      background: #4293b4;
      border-radius: 5px;
      font-size: 20px;
      padding: 10px;
      color: #ffff;
      margin: 0 auto;
    }
  }
  button a {
    text-decoration: none;
    color: var(--white);
  }
  .image {
  }
`;
