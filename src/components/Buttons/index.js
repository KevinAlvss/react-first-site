import React from 'react';

import './styles.css';

function Buttons() {
  return (
      <div id="buttons-container">
          <p>
              Venha ser lindo você também
          </p>
          <div id="buttons-content">
            <button>
                <a href="#" >Ser Lindo</a>
            </button>
            <button>
                <a href="#" >Já sou</a>
            </button>
            <button>
                <a href="#">Ainda não</a>
            </button>
          </div>
      </div>
  );
}

export default Buttons;