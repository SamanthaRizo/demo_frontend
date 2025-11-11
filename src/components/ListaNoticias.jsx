import React, { useState, useEffect } from 'react';
import { getAllNoticias, deleteNoticia } from '../api';

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);

  const cargarNoticias = async () => {
    try {
      const data = await getAllNoticias();
      setNoticias(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await deleteNoticia(id);
      cargarNoticias();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    cargarNoticias();
  }, []);

  return (
    <div className="container">
      <h2>Noticias Financieras</h2>
      {noticias.map(n => (
        <div key={n.id} className="card">
          <h3>{n.titulo}</h3>
          <p>{n.resumen}</p>
          <small>{n.fecha_publicacion}</small><br/>
          <button className="danger" onClick={() => handleEliminar(n.id)}>Eliminar</button>
        </div>
      ))}
      <button className="secondary" onClick={() => window.history.back()}>Volver al menú</button>
    </div>
  );
}

export default ListaNoticias;
