import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import axios from "../../services/axios";
import history from "../../services/history";
import { get } from "lodash";

// # Importação de estilos
import { Form } from "./styled";
import { Container } from "../../styles/globalStyles";

// # Arquivos próprios

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubimit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido");
    }

    if (password.length < 6 || password.length > 20) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 20 caracteres");
    }

    if (formErrors) return;

    try {
      // const response = await axios.post("/users/", {
      await axios.post("/users/", {
        nome,
        password,
        email,
      });
      toast.success("Você fez seu cadastro");
      history.push("/login");
    } catch (e) {
      // const status = get(e, "response.status", 0);
      const errors = get(e, "response.data.errors", []);

      errors.map((error) => toast.error(error));
    }
  }
  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubimit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
