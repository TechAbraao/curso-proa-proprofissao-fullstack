import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
   const [contador, setContador] = useState(0);
   //
   function Incremento() {
      setContador((prevValue) => prevValue + 1);
   }
   //
   function Decremento() {
    setContador((prevValue) => prevValue - 1);
 }

   //
   return (
      <>
         <main>
            <h1>Contador</h1>
            <div>
               <p>{contador}</p>
            </div>
            <div>
               <Button operador={Incremento} nomeBotao="Incremento" />
               <Button operador={Decremento} nomeBotao="Decremento" />
            </div>
         </main>
      </>
   );
}

export default App;
