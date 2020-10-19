import React from "react";
import "./Menu.css";
import Botoes from "./Botoes";
const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <span>POS</span>
        <Botoes />
      </li>
      <li>
        <span>Time</span>
        <Botoes />
      </li>
      <li>
        <span>PTS</span>
        <Botoes />
      </li>
      <li>
        <span>E</span>
        <Botoes />
      </li>
      <li>
        <span>V</span>
        <Botoes />
      </li>
      <li>
        <span>D</span>
        <Botoes />
      </li>
      <li>
        <span>GF</span>
        <Botoes />
      </li>
      <li>
        <span>GS</span>
        <Botoes />
      </li>
      <li>
        <span>SG</span>
        <Botoes />
      </li>
    </ul>
  );
};

export default Menu;
