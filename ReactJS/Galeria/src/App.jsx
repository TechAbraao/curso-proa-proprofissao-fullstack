import { useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

import Sapo from "./img/Sapo.png";
import Cachorro from "./img/Cachorro.png";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
      <div className="texto">
        <h1>Galeria de Fotos</h1>
      </div>
      <div className="box">
      <div className="box-galeria">
            <Card image={Sapo} />
            <Card image={Cachorro} />
            <Card image={Cachorro} />
            <Card image={Sapo} />
            <Card image={<></>} />
            <Card image={<></>} />
            <Card image={<></>} />
            <Card image={<></>} />
         </div>
      </div>
      </>
   );
}

export default App;
