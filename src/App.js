import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div>
      <h1>Formulario de Registro</h1>
      <Formulario />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));