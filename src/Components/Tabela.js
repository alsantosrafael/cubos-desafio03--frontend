import React from "react";
import "./css_components/Tabela.css";
import Menu from "./Menu";
import organizaTabela from "../utils/organizaTabela";

const Tabela = (props) => {
  const {
    jogos,
    setJogos,
    times,
    loadingTabela,
    setLoadingTabela,
    loadJogos,
    ordenaJogos,
  } = props;

  const [filtro, setFiltro] = React.useState({ nome: "POS", tipo: "cre" });

  const applyFilter = (nome, direcao) => {
    setFiltro({ nome: nome, tipo: direcao });
  };

  const tabelaOrganizada = organizaTabela(filtro.nome, filtro.tipo, times);

  React.useEffect(() => {
    ordenaJogos(tabelaOrganizada);
  }, [tabelaOrganizada]);

  return (
    <article className="tabela">
      <header className="head-tabela">
        <Menu filtro={filtro} applyFilter={applyFilter} />
      </header>
      <section className="times">
        {loadingTabela ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {times.map((time) => (
              <li
                key={time.nome}
                style={
                  time.id > 16 && time.id <= 20
                    ? { backgroundColor: "palevioletred" }
                    : time.id >= 1 && time.id < 5
                    ? { backgroundColor: "springGreen" }
                    : { backgroundColor: "" }
                }
              >
                <span>{time.id}</span>
                <span>{time.nome}</span>
                <span
                  style={
                    time.id === 19
                      ? { marginLeft: "auto" }
                      : { marginLeft: "1.5rem" }
                  }
                >
                  {" "}
                  {time.pontos}
                </span>
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
