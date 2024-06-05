import { useState } from "react";
import "./App.css";
import Contatos from "./assets/components/Contatos/Contatos";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Contatos />
      </>
   );
}

export default App;
