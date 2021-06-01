import React from "react";
import Routes from "../src/routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

// # Importação de componentes
import Header from "../src/components/header";
import { Router } from "react-router-dom";

// # arquivos
import history from "../src/services/history";
import store from "./store";

// # Importação de estilos
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
