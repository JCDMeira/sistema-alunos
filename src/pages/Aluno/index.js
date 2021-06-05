/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";

// # Importação de estilos
import { Title, Paragrafo } from "./styled";
import { Container } from "../../styles/globalStyles";

// # Arquivos próprios
import * as exampleActions from "../../store/modules/example/actions";

export default function Aluno() {
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Aluno</h1>
    </Container>
  );
}
