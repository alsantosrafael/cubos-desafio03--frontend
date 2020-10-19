import React from "react";
import "./Botoes.css";

const Botoes = (props) => {
  return (
    <div className="botoes">
      <button>
        <img
          src="https://systemuicons.com/images/icons/arrow_down.svg"
          alt="seta para baixo"
        />
      </button>
      <button>
        <img
          src="https://systemuicons.com/images/icons/arrow_up.svg"
          alt="seta para cima"
        />
      </button>
    </div>
  );
};

export default Botoes;
