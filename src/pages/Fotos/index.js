/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "lodash";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// # Styles
import { Title, Form } from "./styled";
import { Container } from "../../styles/globalStyles";

// # Own files
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import history from "../../services/history";
import * as actions from "../../store/modules/auth/actions";

export default function Fotos({ match }) {
  const dispatch = useDispatch();
  const id = get(match, "params.id", "");

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, "Foto[0].url", ""));
        setIsLoading(false);
      } catch {
        toast.error("Erro ao obtér imagem");
        setIsLoading(false);
        history.push("/");
      }
    };

    getData();
  }, [id]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("foto", file);

    try {
      setIsLoading(true);
      axios.post("/fotos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Foto enviada com sucesso!");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      const { status } = get(err, "response", "");
      toast.error("Erro ao enviar foto");

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label html="foto">
          {foto ? <img src={foto} alt="foto" /> : "Selecionar"}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
