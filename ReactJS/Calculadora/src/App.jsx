import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
   const [nro1, setNro1] = useState(0);
   const [nro2, setNro2] = useState(0);
   const [resultado, setResultado] = useState(0);
   const [operacao, setOperacao] = useState("Somar");

   const calcular = () => {
      if (operacao == "Somar") {
         return parseFloat(nro1) + parseFloat(nro2);
      } else if (operacao == "Subtrair") {
         return parseFloat(nro1) - parseFloat(nro2);
      } else if (operacao == "Multiplicar") {
         return parseFloat(nro1) * parseFloat(nro2);
      } else {
         return parseFloat(nro1) / parseFloat(nro2);
      }
   };
   useEffect(() => {
      setResultado(calcular());
   }, [nro1, nro2, operacao]);
   return (
      <>
         <div className="App">
            <h1>Calculadora React.Js</h1>
            <label>Primeiro Número</label>
            <input
               type="number"
               value={nro1}
               onChange={(e) => setNro1(e.target.value)}
            />
            <label>Segundo Número</label>
            <input
               type="number"
               value={nro2}
               onChange={(e) => setNro2(e.target.value)}
            />
            <select onChange={(e) => setOperacao(e.target.value)}>
               <option>Somar</option>
               <option>Subtrair</option>
               <option>Multiplicar</option>
               <option>Dividir</option>
            </select>
            <label>Resultado igual a = {resultado}</label>
         </div>
      </>
   );
}

export default App;
