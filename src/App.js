import React from "react";
import Header from "./Header";
import Rodada from "./Rodada";
import Tabela from "./Tabela";
const { fazerRequisicaoComBody } = require("./utils/fetchJson");

function App() {
  const [logado, setLogado] = React.useState(); //Melhor substituir por um objeto com atributo
  const [numRodada, setRodada] = React.useState(1);
  const [jogos, setJogos] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const [loadingTabela, setLoadingTabela] = React.useState(true);
  const [loadingRodada, setLoadingRodada] = React.useState(true);
  const [jogosAtuais, setJogosAtuais] = React.useState([]);

  const loadRodada = () => {
    setLoadingRodada(true);

    fazerRequisicaoComBody(`http://localhost:1306/jogos/${numRodada}`, "GET")
      .then((resposta) => resposta.json())
      .then((resposta) => {
        setJogosAtuais(resposta.dados);
        setLoadingRodada(false);
      });
  };

  const loadJogos = () => {
    setLoadingTabela(true);

    fazerRequisicaoComBody("http://localhost:1306/classificacao", "GET")
      .then((resposta) => resposta.json())
      .then((resposta) => {
        //Fazer um map, colocar um id no objeto do time
        const novoArray = resposta.dados.map((obj, index) => ({
          ...obj,
          id: index + 1,
        }));
        setTimes(novoArray);
        setLoadingTabela(false);
      });
  };

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
            jogos={jogos}
            setJogos={setJogos}
            loadRodada={loadRodada}
            jogosAtuais={jogosAtuais}
            setJogosAtuais={setJogosAtuais}
            loadingRodada={loadingRodada}
            setLoadingRodada={setLoadingRodada}
            loadJogos={loadJogos}
          />
          <Tabela
            times={times}
            setTimes={setTimes}
            jogos={jogos}
            setJogos={setJogos}
            loadingTabela={loadingTabela}
            setLoadingTabela={setLoadingTabela}
            loadJogos={loadJogos}
          />
        </section>
      </main>
    </>
  );
}

export default App;
