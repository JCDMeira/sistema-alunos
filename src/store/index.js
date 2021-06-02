import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// # Arquivos próprios
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
