import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch } from "react-redux";
import { get } from "lodash";

// # Importação de estilos
import { Container } from "../../styles/globalStyles";
import { Form } from "./styled";

// # Arquivos próprios
import * as actions from "../../store/modules/auth/actions";

export default function Login(props) {
  const dispach = useDispatch();

  const prevPath = get(props, "location.state.prevPath", "/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido");
    }

    if (password.length < 6 || password.length > 20) {
      formErrors = true;
      toast.error("Senha inválida");
    }

    if (formErrors) return;

    dispach(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Seu e-mail"}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Seu e-mail"}
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
