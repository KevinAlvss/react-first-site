import React from 'react';

import carinhaImg from '../../images/carinha.svg'
import './styles.css'
function Imagem() {
  return (
      <div id="image-container">
          <img src={carinhaImg} alt="carinha"/>
      </div>
  );
}

export default Imagem;