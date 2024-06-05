import React from "react";
import "./Card.css";
import { useState } from "react";
export default function Card({ image }) {
   const [fullscreen, setFullscreen] = useState(false);
   const toggleFullscreen = () => {
      setFullscreen(!fullscreen);
   };

   return (
      <div className="card">
         <img src={image} alt="Imagem anexada" className="zoomImg" />
      </div>
   );
}
