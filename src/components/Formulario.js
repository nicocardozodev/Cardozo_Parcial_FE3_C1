import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [marcaAuto, setMarcaAuto] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreValido = nombre.trim().length >= 3 && !nombre.startsWith(' ');
    const marcaAutoValida = marcaAuto.trim().length >= 6;

    if (nombreValido && marcaAutoValida) {
      setEnviado(true);
      setError(false);
      console.log('Nombre:', nombre);
      console.log('Marca de auto preferida:', marcaAuto);
    } else {
      setEnviado(false);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Marca de auto preferida:</label>
          <input
            type="text"
            value={marcaAuto}
            onChange={(e) => setMarcaAuto(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {enviado && (
        <div>
          <h2>Información recibida:</h2>
          <p>Nombre: {nombre}</p>
          <p>Marca de auto preferida: {marcaAuto}</p>
        </div>
      )}
      {error && <p>Por favor, chequea que la información sea correcta.</p>}
    </div>
  );
};

export default Formulario;

