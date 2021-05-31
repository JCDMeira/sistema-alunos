import React from "react";

// # Importação de páginas
import Login from "./pages/login";

// # Importação de componentes
import Header from "../src/components/header";

// # Importação de estilos
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App;
