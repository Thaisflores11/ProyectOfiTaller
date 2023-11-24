import React from 'react';
import "../components/stylecomponents/Tienda.css";

const Tienda = ({ title, imgUrl, precio }) => {
  return (
    <div className="tarjeta-tienda">
      <img src={imgUrl} alt={title} />
      <div className="textos-tarjeta-tienda">
        <p>{title}</p>
        <p>{precio}</p>
        
      </div>
    </div>
  );
};

export default Tienda;
