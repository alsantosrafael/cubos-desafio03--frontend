import React from "react";
import "./Botoes.css";

const Botoes = (props) => {
  const { filtro, setFiltro } = props;

  return (
    <div className="botoes">
      <button hidden={props.hiddenDec} onClick={() => props.onClick("dec")}>
        <img
          src="https://systemuicons.com/images/icons/arrow_down.svg"
          alt="seta para baixo"
        />
      </button>
      <button hidden={props.hiddenCre} onClick={() => props.onClick("cre")}>
        <img
          src="https://systemuicons.com/images/icons/arrow_up.svg"
          alt="seta para cima"
        />
      </button>
    </div>
  );
};

export default Botoes;
