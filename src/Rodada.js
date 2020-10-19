import React from "react";
import "./Rodada.css";

const { fetchJson, fazerRequisicaoComBody } = require("./utils/fetchJson");

const Rodada = (props) => {
  const { numRodada, setRodada, logado, setLogado } = props;
  const [jogosAtuais, setJogos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const loadRodada = () => {
    setLoading(true);
    fetchJson(
      `https://desafio-3-back-cubos-academy.herokuapp.com/jogos/${numRodada}`
    ).then((resposta) => {
      setJogos(resposta.dados);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    loadRodada();
  }, []);

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
        {loading ? (
          <p style={{ padding: "0.5rem" }}>Carregando...</p>
        ) : (
          <ul>
            {jogosAtuais.map((jogo) => (
              <li key={jogo.id} className="jogo">
                <span>{jogo.time_casa}</span>
                <span style={{ fontSize: "1.5rem" }}>{jogo.gols_casa}</span>
                <span style={{ fontSize: "0.8rem" }}>x</span>
                <span style={{ fontSize: "1.5rem" }}>
                  {jogo.gols_visitante}
                </span>
                <span>{jogo.time_visitante}</span>
                <button
                  hidden={logado ? true : false}
                  onClick={(event) => {
                    event.target.setAttribute(
                      "src",
                      "https://systemuicons.com/images/icons/check.svg"
                    );
                    if (
                      event.target.getAttribute("src") ===
                      "https://systemuicons.com/images/icons/check.svg"
                    ) {
                      event.target.setAttribute(
                        "src",
                        "https://systemuicons.com/images/icons/check.svg"
                      );
                      //Permitir a edição, armazenar o dado editado, Fazer a requisição de post e alterar no banco de dados, atualizar minha tabela e rodada. Setar imagem para caneta
                      //   const conteudo =
                      //   fazerRequisicaoComBody(`https://desafio-3-back-cubos-academy.herokuapp.com/jogos/${numRodada}`, 'POST',)
                    }
                  }}
                >
                  <img
                    src="https://systemuicons.com/images/icons/pen.svg"
                    alt="botao edição/confirmação"
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
//Adicionar onClick no botão de edição de jogos
//A edição só deve aparecer quando o usuário logar
//Após a edição os dados tem de ser atualizados na tabela dos jogos
//e na tabela de rodadas tb
