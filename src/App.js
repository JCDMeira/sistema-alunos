import React from "react";
import Routes from "../src/routes";

// # Importação de componentes
import Header from "../src/components/header";
import { Router } from "react-router-dom";

// # arquivos
import history from "../src/services/history";

// # Importação de estilos
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
