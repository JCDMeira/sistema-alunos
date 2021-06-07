import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";

// # Importação de estilos
import { Form } from "./styled";
import { Container } from "../../styles/globalStyles";

// # Arquivos próprios
import * as actions from "../../store/modules/auth/actions";

// # Components
import Loading from "../../components/Loading";

export default function Register() {
  const id = useSelector((state) => state.auth.user.id);
  const nomeStorage = useSelector((state) => state.auth.user.nome);
  const emailStorage = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.user.isLoading);

  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!id) return;

    setNome(nomeStorage);
    setEmail(emailStorage);
  }, [emailStorage, id, nomeStorage]);

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

    if (!id && (password.length < 6 || password.length > 20)) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 20 caracteres");
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? "Editar dados" : "Crie sua conta"}</h1>

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

        <button type="submit">
          {id ? "Salvar dados" : "Criar minha conta"}
        </button>
      </Form>
    </Container>
  );
}
