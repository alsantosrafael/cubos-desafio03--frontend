import React from "react";
import "./Tabela.css";
import Menu from "./Menu";

const { fetchJson, fazerRequisicaoComBody } = require("./utils/fetchJson");

const organizaTabela = (nome, tipo, times) => {
  if (nome === "POS") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }

  if (nome === "Time") {
    tipo === "cres"
      ? times.sort((a, b) => a.localeCompare(b))
      : times.sort((a, b) => b.localeCompare(a));
  }
  if (nome === "PTS") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "E") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "V") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "D") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "GF") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "GS") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "SG") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
};
const Tabela = () => {
  const [times, setTimes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filtro, setFiltro] = React.useState({ nome: "POS", tipo: "cre" });

  const loadJogos = () => {
    setLoading(true);
    fetchJson(
      "https://desafio-3-back-cubos-academy.herokuapp.com/classificacao"
    ).then((resposta) => {
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
