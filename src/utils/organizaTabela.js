const organizaTabela = (nome, tipo, times) => {

  if (nome === "POS") {
    times = tipo === "cre"
      ? (times.sort((a, b) => a.id - b.id))
      : ( times.sort((a, b) => b.id - a.id));
  }

  if (nome === "Time") {
    times = tipo === "cre"
      ? ( times.sort((a, b) => a.nome.localeCompare(b.nome)))
      : ( times.sort((a, b) => b.nome.localeCompare(a.nome)));
  }
  if (nome === "PTS") {
	times = tipo === "cre"
	
      ? (times.sort((a, b) => a.pontos - b.pontos))
      : ( times.sort((a, b) => b.pontos - a.pontos));
  }
  if (nome === "E") {
    times = tipo === "cre"
      ? ( times.sort((a, b) => a.empates - b.empates))
      : ( times.sort((a, b) => b.empates - a.empates));
  }
  if (nome === "V") {
    times = tipo === "cre"
      ? ( times.sort((a, b) => a.vitorias - b.vitorias))
      : ( times.sort((a, b) => b.vitorias - a.vitorias));
  }
  if (nome === "D") {
    times = tipo === "cre"
      ? ( times.sort((a, b) => a.derrotas - b.derrotas))
      : ( times.sort((a, b) => b.derrotas - a.derrotas));
  }
  if (nome === "GF") {
    times = tipo === "cre"
      ? ( times.sort((a, b) => a.golsFeitos - b.golsFeitos))
      : ( times.sort((a, b) => b.golsFeitos - a.golsFeitos));
  }
  if (nome === "GS") {
    times = tipo === "cre"
      ? ( times.sort((a, b) => a.golsSofridos - b.golsSofridos))
      : ( times.sort((a, b) => b.golsSofridos - a.golsSofridos));
  }
  if (nome === "SG") {
    times = tipo === "cre"
      ? ( times.sort(
          (a, b) =>
            a.golsFeitos - a.golsSofridos - (b.golsFeitos - b.golsSofridos)
        ))
      : ( times.sort(
          (a, b) =>
            b.golsFeitos - b.golsSofridos - (a.golsFeitos - a.golsSofridos)
        ));
  }
  return times;
};

module.exports = organizaTabela;
