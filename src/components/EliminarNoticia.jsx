import React, { useState } from 'react';
import { deleteNoticia } from '../api';

function EliminarNoticia() {
  const [idEliminar, setIdEliminar] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleEliminar = async () => {
    try {
      const data = await deleteNoticia(idEliminar);
      setMensaje(data.mensaje);
      setError('');
      setIdEliminar('');
    } catch (err) {
      setError(err.message);
      setMensaje('');
    }
  };

  return (
    <div className="container">
      <h2>Eliminar Noticia</h2>
      <input type="number" placeholder="ID Noticia" value={idEliminar} onChange={(e) => setIdEliminar(e.target.value)} />
      <button className="danger" onClick={handleEliminar}>Eliminar</button>
      <button className="secondary" onClick={() => window.history.back()}>Volver al menú</button>
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default EliminarNoticia;
