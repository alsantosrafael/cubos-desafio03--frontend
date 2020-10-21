import React from "react";
import "./Tabela.css";
import Menu from "./Menu";
import organizaTabela from "./utils/organizaTabela";
const { fazerRequisicaoComBody } = require("./utils/fetchJson");

const Tabela = () => {
  const [times, setTimes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filtro, setFiltro] = React.useState({ nome: "POS", tipo: "cre" });

  const loadJogos = () => {
    setLoading(true);

    fazerRequisicaoComBody("http://localhost:1306/classificacao", "GET")
      .then((resposta) => resposta.json())
      .then((resposta) => {
        console.log(resposta);
        setTimes(resposta.dados);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    loadJogos();
  }, []);

  React.useEffect(() => {
    setTimes(times.sort(organizaTabela(filtro.nome, filtro.tipo, times)));
  }, [filtro]);

  //   React.useEffect(() => {
  //     console.log(populaTabela(jogos)); //Colocar no botão do V após edição
  //   }, [jogos]);

  return (
    <article className="tabela">
      <header className="head-tabela">
        <Menu filtro={filtro} setFiltro={setFiltro} />
      </header>
      <section className="times">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {times.map((time, index) => (
              <li key={time.nome}>
                <span>{index + 1}</span>
                <span>{time.nome}</span>
                <span>{time.pontos}</span>
                <span>{time.empates}</span>
                <span>{time.vitorias}</span>
                <span>{time.derrotas}</span>
                <span>{time.golsFeitos}</span>
                <span>{time.golsSofridos}</span>
                <span>{time.golsFeitos - time.golsSofridos}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Tabela;
