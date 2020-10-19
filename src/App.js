import React from "react";
import Header from "./Header";
import Rodada from "./Rodada";
import Tabela from "./Tabela";
import fetchJson from "./utils/fetchJson";
// import './App.css';

function App() {
  const [logado, setLogado] = React.useState(false);
  const [numRodada, setRodada] = React.useState(1);
  const [dados, setDados] = React.useState(null);

  //Tenho de atrelar esse array vazio à alguma variável que perceba mudança da tabela
  return (
    <>
      <Header logado={logado} />
      <main>
        <section className="corpo">
          <Rodada
            numRodada={numRodada}
            setRodada={setRodada}
            logado={logado}
            setLogado={setLogado}
          />
          <Tabela />
        </section>
      </main>
    </>
  );
}

export default App;
