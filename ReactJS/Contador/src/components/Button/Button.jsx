import React from "react";
import { useState } from "react";
import "./Button.css";
//
export default function Button(props) {
   return (
      <>
         <button onClick={props.operador}>{props.nomeBotao}</button>
      </>
   );
}
