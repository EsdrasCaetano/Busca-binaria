import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [numPalpites, setNumPalpite] = useState(1);
  const [palpite, setPaplpite] = useState(150);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setNumPalpite(1);
    setPaplpite(150);
    setMin(0);
    setMax(300);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Iniciar jogo!</button>;
  }
  const menor = () => {
    setNumPalpite(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPaplpite(proxPalpite);
  };
  const maior = () => {
    setNumPalpite(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPaplpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Seu número foi {palpite} e acertei com {numPalpites} palpites
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Seu número é {palpite}?</p>
      <p>
        Min: {min}/ Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
