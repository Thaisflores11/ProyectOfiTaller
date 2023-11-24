import React from 'react';
import Tienda from "../components/Tienda";
import { tienda } from "../assets/ApiTienda";

import "../components/stylecomponents/Tienda.css";

const TarjetaTienda = () => {
  return (
    <section className="tienda-section">
      <h2>Tienda</h2>
      <div className="tarjeta-container"> 
        {tienda.map((tienda, index) => (
          <Tienda
            key={index}
            title={tienda.title}
            imgUrl={tienda.imgUrl}
            precio={tienda.precio}
          />
        ))}
      </div>
    </section>
  );
};


export default TarjetaTienda;