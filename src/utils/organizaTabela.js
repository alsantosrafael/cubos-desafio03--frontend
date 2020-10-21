const organizaTabela = (nome, tipo, times) => {
  if (nome === "POS") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }

  if (nome === "Time") {
    tipo === "cres"
      ? times.sort((a, b) => a.nome.localeCompare(b.nome))
      : times.sort((a, b) => b.nome.localeCompare(a.nome));
  }
  if (nome === "PTS") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "E") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "V") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "D") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "GF") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "GS") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
  if (nome === "SG") {
    tipo === "cres" ? times.sort((a, b) => a - b) : times.sort((a, b) => b - a);
  }
};

module.exports = organizaTabela;
