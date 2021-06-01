import React from "react";
import { useDispatch } from "react-redux";

// # Importação de estilos
import { Title, Paragrafo } from "./styled";
import { Container } from "../../styles/globalStyles";

// # Arquivos próprios
import * as exampleActions from "../../store/modules/example/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }

  return (
    <Container>
      <Title isRed={false}>
        Hello world
        <small>Hello again</small>
      </Title>
      <Title isRed>Oi</Title>
      <Paragrafo>lorem</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
