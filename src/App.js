
import Banner from './componente/Banner/Banner.js';
import Formulario from './componente/Formulario/index.js';
import Time from './componente/Time/index.js';

import { useState } from 'react';



function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
        <Time nome="Front-End"/>
        <Time nome="Data Science"/>
        
    </div>
  );
}

export default App;