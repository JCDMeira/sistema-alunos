import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";

// # arquivos próprios
import axios from "../../../services/axios";
import history from "../../../services/history";
import * as actions from "./actions";
import * as types from "../types";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/tokens", payload);

    yield put(actions.loginSuccess({ ...response.data }));

    toast.success("Você fez login");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error("Usuário ou senha inválidos");
    yield put(actions.loginFailure());
  }
}

function persistRehydrate(payload) {
  const token = get(payload, "auth.token", "");

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  // eslint-disable-next-line no-unused-vars
  const { id, nome, email, password } = payload;
  console.log(id, nome, email, password);

  try {
    if (id) {
      yield call(axios.put, "/users", {
        email,
        nome,
        password: password || undefined,
      });
      toast.success("Dados alterados com successo");
      yield put(actions.registerUpdatedSuccess((nome, email, password)));
    } else {
      yield call(axios.post, "/users", {
        email,
        nome,
        password,
      });
      toast.success("Conta criada com successo");
      yield put(actions.registerCreatedSuccess(nome, email, password));
      history.push("/login");
    }
  } catch (e) {
    const errors = get(e, "reponse.data.erros", []);
    // eslint-disable-next-line no-unused-vars
    const status = get(e, "response.status", 0);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error("Erro desconhecido");
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
