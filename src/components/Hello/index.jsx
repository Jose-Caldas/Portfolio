import { Container } from "../Hello/styled";
import Image from "./img/laptop.jpg";
function Hello() {
  return (
    <Container>
      <div className="content">
        <h1>
          Hi,
          <br /> I'm José Caldas,
        </h1>
        <h2>A Front-End Developer</h2>
        <button>
          <a href="#about">About me</a>
        </button>
      </div>
      <div className="image">
        <img src={Image} alt="imagem" srcset="" />
      </div>
    </Container>
  );
}

export default Hello;
