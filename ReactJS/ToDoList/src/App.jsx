import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ToDoList from "./assets/ToDoList/ToDoList";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>To-Do-List com ReactJs</h1>
         <ToDoList />
      </>
   );
}

export default App;
