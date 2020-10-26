import React from "react";
import "./css_components/Rodada.css";

const { fazerRequisicaoComBody } = require("../utils/fetchJson");

const Rodada = (props) => {
  const {
    numRodada,
    setRodada,
    logado,
    setLogado,
    loadRodada,
    jogosAtuais,
    setJogosAtuais,
    loadingRodada,
    setLoadingRodada,
    loadJogos,
  } = props;

  const [editandoId, setEditandoId] = React.useState("");
  const [golsCasa, setGolsCasa] = React.useState("");
  const [golsVisitante, setGolsVisitante] = React.useState("");
  const [adicionando, setAdicionando] = React.useState(false);
  return (
    <article className="rodada">
      <header className="head-rodada">
        <button
          disabled={numRodada === 1 ? true : false}
          onClick={() => {
            setRodada(numRodada - 1);
            loadRodada();
          }}
        >
          <img
            src="https://systemuicons.com/images/icons/arrow_left.svg"
            alt="arrow-left"
          ></img>
        </button>
        <h2>{numRodada}ª rodada</h2>
        <button
          disabled={numRodada === 38 ? true : false}
          onClick={() => {
            setRodada(numRodada + 1);
            loadRodada();
          }}
        >
          <img
            src="https://systemuicons.com/images/icons/arrow_right.svg"
            alt="arrow-right"
          ></img>
        </button>
      </header>

      <section className="jogos">
        {loadingRodada ? (
          <p style={{ padding: "0.5rem" }}>Carregando...</p>
        ) : (
          <ul>
            {jogosAtuais.map((jogo) => (
              <li key={jogo.id} className="jogo">
                <span>{jogo.time_casa}</span>
                {editandoId === jogo.id && logado ? (
                  <input
                    value={golsCasa}
                    onInput={(event) => setGolsCasa(event.target.value)}
                  ></input>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>{jogo.gols_casa}</span>
                )}
                <span style={{ fontSize: "0.8rem" }}>x</span>

                {editandoId === jogo.id && logado ? (
                  <input
                    value={golsVisitante}
                    onInput={(event) => setGolsVisitante(event.target.value)}
                  ></input>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>
                    {jogo.gols_visitante}
                  </span>
                )}
                <span>{jogo.time_visitante}</span>
                <button
                  hidden={!logado}
                  onClick={() => {
                    if (editandoId) {
                      setEditandoId("");
                      setGolsVisitante("");
                      setGolsCasa("");
                      fazerRequisicaoComBody(
                        `http://localhost:1306/jogos`,
                        "PUT",
                        {
                          id: Number(jogo.id),
                          gols_casa: Number(golsCasa),
                          gols_visitante: Number(golsVisitante),
                        },
                        logado.token
                      ).then(() => {
                        loadRodada();
                        loadJogos();
                      });
                    } else {
                      setEditandoId(jogo.id);
                      setGolsVisitante(jogo.gols_visitante);
                      setGolsCasa(jogo.gols_casa);
                    }
                  }}
                >
                  <img
                    src={
                      editandoId === jogo.id
                        ? "https://systemuicons.com/images/icons/check.svg"
                        : "https://systemuicons.com/images/icons/pen.svg"
                    }
                    alt="botao edição/confirmação"
                  ></img>
                </button>
                <button
                  hidden={!logado}
                  onClick={() => {
                    setEditandoId("");
                    fazerRequisicaoComBody(
                      `http://localhost:1306/jogos`,
                      "DELETE",
                      {
                        idJogo: Number(jogo.id),
                      },
                      logado.token
                    ).then(() => {
                      loadRodada();
                      loadJogos();
                    });
                  }}
                >
                  <img
                    src="https://systemuicons.com/images/icons/cross.svg"
                    alt="botao deletar"
                  ></img>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Rodada;
