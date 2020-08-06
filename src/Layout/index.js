import React from 'react';

import Title from '../components/Title'
import Imagem from '../components/Imagem';
import Buttons from  '../components/Buttons'
import Mensagem from '../components/Mensagem'

import './styles.css'

function Layout() {
  return(
      <div id="layout-container">
          <Title />
          <Imagem />
          <Buttons />
          <Mensagem />
      </div>
  );
}

export default Layout;