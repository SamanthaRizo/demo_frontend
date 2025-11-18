import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';   // ← NUEVO
import { getAllNoticias, deleteNoticia } from '../api';

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const navigate = useNavigate();                // ← NUEVO

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

          <p><strong>ID:</strong> {n.id}</p>

          <h3>{n.titulo}</h3>

          <p><strong>Contenido:</strong><br /> {n.contenido}</p>

          <p><strong>Departamento:</strong> {n.departamento}</p>

          <small><strong>Fecha publicación:</strong> {n.fecha_publicacion}</small>
          <br/>

          {/* ← NUEVO botón para ir al detalle */}
          <button className="primary" onClick={() => navigate(`/noticia/${n.id}`)}>
            Ver detalle
          </button>

          <button className="danger" onClick={() => handleEliminar(n.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <button className="secondary" onClick={() => window.history.back()}>
        Volver al menú
      </button>
    </div>
  );
}

export default ListaNoticias;
