import React from "react";
import "./Header.css";
const Header = (props) => {
  const { logado } = props;
  return (
    <div className="cabecalho">
      <header>
        <h1>Brasileirão</h1>
        <form className="login">
          <label htmlFor="user">
            E-mail
            <input
              id="user"
              name="user"
              type="email"
              placeholder="Insira seu e-mail"
              title="seuemail@seudominio.com"
            ></input>
          </label>
          <label htmlFor="code">
            Senha
            <input
              id="code"
              name="code"
              type="password"
              placeholder="Insira sua senha"
            ></input>
          </label>
          <button type="submit">{!logado ? "Logar" : "Deslogar"} </button>
        </form>
      </header>
    </div>
  );
};

export default Header;
