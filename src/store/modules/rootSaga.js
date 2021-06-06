import { all } from "redux-saga/effects";

import auth from "./example/sagas";

export default function* rootSaga() {
  return yield all([auth]);
}
