import React from "react";
import { Container } from "./styled";
// import { Route, Switch } from "react-router-dom";

function About() {
  return (
    <Container>
      <h1 id="about">About</h1>

      <h2>Let's talk a little about me</h2>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
          odit dolorum quisquam nobis quidem et cumque illum eligendi repellat,
          soluta alias. Odit tempore alias expedita eos id, similique repellat
          hic?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
          odit dolorum quisquam nobis quidem et cumque illum eligendi repellat,
          soluta alias. Odit tempore alias expedita eos id, similique repellat
          hic?
        </p>
      </div>
      <h2>
        Nowadays, I'm available for freelance work with the following
        technologies.
      </h2>
      <ul>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>Styled Components</li>
        <li>Redux</li>
      </ul>
    </Container>
  );
}

export default About;
