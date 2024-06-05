import { useState } from "react";
import Quiz from "./pages/Quiz/Quiz";
function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Quiz />
      </>
   );
}

export default App;
