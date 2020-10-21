import React from "react";
import "./Header.css";
const { fazerRequisicaoComBody } = require("./utils/fetchJson");

const Header = (props) => {
  const { logado, setLogado } = props;
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <div className="cabecalho">
      <header>
        <h1>Brasileirão</h1>
        <form className="login" method="post">
          <label htmlFor="user" hidden={logado ? true : false}>
            E-mail
            <input
              id="user"
              name="user"
              type="email"
              placeholder="Insira seu e-mail"
              title="seuemail@seudominio.com"
              //   hidden={logado ? true : false
              value={email}
              onInput={(event) => setEmail(event.target.value)}
            ></input>
          </label>
          <label htmlFor="code" hidden={logado ? true : false}>
            Senha
            <input
              id="code"
              name="code"
              type="password"
              placeholder="Insira sua senha"
              value={senha}
              onInput={(event) => setSenha(event.target.value)}
            ></input>
          </label>
          <button
            disabled={(!senha || !email) && !logado}
            type="submit"
            onClick={async (event) => {
              event.preventDefault();
              if (logado) {
                setLogado(undefined);
              } else {
                try {
                  const respostaLogin = await fazerRequisicaoComBody(
                    "https://desafio-3-back-cubos-academy.herokuapp.com/auth",
                    "POST",
                    { email: email, password: senha }
                  ).then((resposta) => resposta.json());

                  if (respostaLogin.dados && respostaLogin.dados.token) {
                    setLogado(respostaLogin.dados);
                    setEmail("");
                    setSenha("");
                  } else if (respostaLogin.dados) {
                    alert(respostaLogin.dados.mensagem);
                  }
                } catch (err) {
                  console.log(err.message);
                }
              }
            }}
          >
            {!logado ? "Logar" : "Deslogar"}
          </button>
        </form>
      </header>
    </div>
  );
};

export default Header;
