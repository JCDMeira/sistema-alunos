import React from "react";
import Routes from "../src/routes";

// # Importação de componentes
import Header from "../src/components/header";
import { BrowserRouter } from "react-router-dom";

// # Importação de estilos
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
