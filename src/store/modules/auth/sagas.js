/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import * as actions from "./actions";
import * as types from "../types";

function* loginRequest({ payload }) {
  console.log("SAGA");
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
