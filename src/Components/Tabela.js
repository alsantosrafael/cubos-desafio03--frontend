import React from "react";
import "./css_components/Tabela.css";
import Menu from "./Menu";
import organizaTabela from "../utils/organizaTabela";

const Tabela = (props) => {
  const {
    jogos,
    setJogos,
    times,
    setTimes,
    loadingTabela,
    setLoadingTabela,
    loadJogos,
  } = props;

  const [filtro, setFiltro] = React.useState({ nome: "POS", tipo: "cre" });

  React.useEffect(() => {
    loadJogos();
  }, []);

  React.useEffect(() => {
    setTimes(times.sort(organizaTabela(filtro.nome, filtro.tipo, times)));
  }, [filtro]);

  return (
    <article className="tabela">
      <header className="head-tabela">
        <Menu filtro={filtro} setFiltro={setFiltro} />
      </header>
      <section className="times">
        {loadingTabela ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {times.map((time) => (
              <li key={time.nome}>
                <span>{time.id}</span>
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
