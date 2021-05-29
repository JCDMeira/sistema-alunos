import React from "react";

import { Title, Paragrafo } from "./styled";
import { Container } from "../../styles/globalStyles";

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Hello world
        <small>Hello again</small>
      </Title>
      <Title isRed>Oi</Title>
      <Paragrafo>lorem</Paragrafo>
    </Container>
  );
}
