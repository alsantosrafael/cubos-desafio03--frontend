import React from "react";
import "./Tabela.css";
import Menu from "./Menu";

const { fetchJson, fazerRequisicaoComBody } = require("./utils/fetchJson");
const { populaTabela } = require("./utils/tableSorter");

// const organizaTabela = (tabela) => {};

const Tabela = () => {
  const [jogos, setJogos] = React.useState([]);
  const [table, setTable] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const loadJogos = () => {
    setLoading(true);
    fetchJson(`https://desafio-3-back-cubos-academy.herokuapp.com/jogos/`).then(
      (resposta) => {
        setJogos(resposta.dados);
        setLoading(false);
      }
    );
  };

  React.useEffect(() => {
    loadJogos();
    setTable(populaTabela(jogos));
    console.log(table);
  }, []);

  React.useEffect(() => {
    console.log(populaTabela(jogos)); //Colocar no botão do V após edição
  }, [jogos]);

  //setTable(populaTabela(jogos));
  return (
    <article className="tabela">
      <header className="head-tabela">
        <Menu />
      </header>
      <section className="times">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {table.map((time, index) => (
              <li key={time.time}>
                <span>{index + 1}</span>
                <span>{time.time}</span>
                <span>{time.pontos}</span>
                <span>{time.empates}</span>
                <span>{time.vitorias}</span>
                <span>{time.derrotas}</span>
                <span>{time.golsFeitos}</span>
                <span>{time.golsSofridos}</span>
                <span>{time.saldo}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Tabela;
