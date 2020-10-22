import React from "react";
import "./css_components/Menu.css";
import Botoes from "./elementaries/Botoes";
const Menu = (props) => {
  const { filtro, setFiltro } = props;

  const applyFilter = (tipo, direcao) => {
    setFiltro({ nome: "POS", tipo: "cre" });
    setFiltro({ nome: tipo, tipo: direcao });
  };
  return (
    <ul className="menu">
      <li>
        <span>POS</span>
        <Botoes
          hiddenCre={filtro.nome === "POS" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "POS" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("POS", direcao)}
        />
      </li>
      <li>
        <span>Time</span>
        <Botoes
          hiddenCre={filtro.nome === "Time" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "Time" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("Time", direcao)}
        />
      </li>
      <li>
        <span>PTS</span>
        <Botoes
          hiddenCre={filtro.nome === "PTS" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "PTS" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("PTS", direcao)}
        />
      </li>
      <li>
        <span>E</span>
        <Botoes
          hiddenCre={filtro.nome === "E" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "E" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("E", direcao)}
        />
      </li>
      <li>
        <span>V</span>
        <Botoes
          hiddenCre={filtro.nome === "V" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "V" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("V", direcao)}
        />
      </li>
      <li>
        <span>D</span>
        <Botoes
          hiddenCre={filtro.nome === "D" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "D" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("D", direcao)}
        />
      </li>
      <li>
        <span>GF</span>
        <Botoes
          hiddenCre={filtro.nome === "GF" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "GF" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("GF", direcao)}
        />
      </li>
      <li>
        <span>GS</span>
        <Botoes
          hiddenCre={filtro.nome === "GS" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "GS" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("GS", direcao)}
        />
      </li>
      <li>
        <span>SG</span>
        <Botoes
          hiddenCre={filtro.nome === "SG" && filtro.tipo === "cre"}
          hiddenDec={filtro.nome === "SG" && filtro.tipo === "dec"}
          onClick={(direcao) => applyFilter("SG", direcao)}
        />
      </li>
    </ul>
  );
};

export default Menu;
