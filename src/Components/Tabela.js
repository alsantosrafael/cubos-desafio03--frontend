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


  React.useEffect(() => {
    const tabelaOrganizada = organizaTabela(filtro.nome, filtro.tipo, times);
    ordenaJogos(tabelaOrganizada);
    console.log(filtro);
  }, [filtro, times, ordenaJogos]);

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