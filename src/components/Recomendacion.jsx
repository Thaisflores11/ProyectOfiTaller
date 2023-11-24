import React from 'react';
import "../components/stylecomponents/Recomendacion.css";

const Recomendacion = ({ title, imgUrl, precio }) => {
  return (
    <div className="tarjeta-recomendacion">
      <img src={imgUrl} alt={title} />
      <div className="textos-tarjeta-recomendacion">
        <p>{title}</p>
        <p>{precio}</p>
        
      </div>
    </div>
  );
};

export default Recomendacion;
