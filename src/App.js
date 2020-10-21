import React from "react";
import Header from "./Header";
import Rodada from "./Rodada";
import Tabela from "./Tabela";



function App() {
  const [logado, setLogado] = React.useState(); //Melhor substituir por um objeto com atributo
  const [numRodada, setRodada] = React.useState(1);
  const [dados, setDados] = React.useState(null);

  //Tenho de atrelar esse array vazio à alguma variável que perceba mudança da tabela
  return (
    <>
      <Header logado={logado} setLogado={setLogado} />
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
