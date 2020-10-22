import React from "react";
import "./css_components/Botoes.css";

const Botoes = (props) => {
  const { hiddenDec, hiddenCre } = props;

  return (
    <div className="botoes">
      <button hidden={hiddenDec} onClick={() => props.onClick("dec")}>
        <img
          src="https://systemuicons.com/images/icons/arrow_down.svg"
          alt="seta para baixo"
        />
      </button>
      <button hidden={hiddenCre} onClick={() => props.onClick("cre")}>
        <img
          src="https://systemuicons.com/images/icons/arrow_up.svg"
          alt="seta para cima"
        />
      </button>
    </div>
  );
};

export default Botoes;
