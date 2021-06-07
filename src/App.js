import React from "react";
import Routes from "../src/routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// # Importação de componentes
import Header from "../src/components/Header";
import { Router } from "react-router-dom";

// # arquivos
import history from "../src/services/history";
import store, { persistor } from "./store";

// # Importação de estilos
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
