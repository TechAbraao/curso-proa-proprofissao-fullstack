import React, { useState } from 'react';
import ConversorDeMoedas from './components/Conversor';
import './App.css';

function App() {
  const [quantia, setQuantia] = useState(0);
  const [deMoeda, setDeMoeda] = useState("BRL");
  const [paraMoeda, setParaMoeda] = useState("USD");
  const [resultado, setResultado] = useState(0);

  function converterMoeda() {
    const quantidadeNumerica = parseFloat(quantia);
    if (quantidadeNumerica <= 0 || deMoeda === paraMoeda) {
      return setResultado(quantidadeNumerica);
    }

    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${quantidadeNumerica}&from=${deMoeda}&to=${paraMoeda}`)
      .then((resp) => resp.json())
      .then((data) => setResultado(data.rates[paraMoeda]))
      .catch((error) => console.error("Erro ao converter moeda:", error));
  }

  return (
    <div className='container'>
      <div>
        <label>Valor:</label>
        <input type="number" value={quantia} onChange={(e) => setQuantia(e.target.value)} />
      </div>
      <div>
        <label>De:</label>
        <select value={deMoeda} onChange={(e) => setDeMoeda(e.target.value)}>
          <option value='BRL'>REAL</option>
          <option value='USD'>DOLAR</option>
          <option value='EUR'>EURO</option>
        </select>
      </div>
      <div>
        <label>Para:</label>
        <select value={paraMoeda} onChange={(e) => setParaMoeda(e.target.value)}>
          <option value='BRL'>REAL</option>
          <option value='USD'>DOLAR</option>
          <option value='EUR'>EURO</option>
        </select>
      </div>
      <button onClick={converterMoeda}>Converter</button>
      <div className="resultado">{resultado ? resultado : ""}</div>
    </div>
  );
}

export default App;