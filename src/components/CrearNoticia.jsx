import React, { useState } from 'react';
import { createNoticia } from '../api';
import { useNavigate } from 'react-router-dom';

function CrearNoticia() {
  const [noticia, setNoticia] = useState({
    titulo: '', resumen: '', contenido: '', fecha_publicacion: '', fuente: '', departamento: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setNoticia({ ...noticia, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createNoticia(noticia);
      setMensaje(data.mensaje);
      setError('');
      setNoticia({ titulo: '', resumen: '', contenido: '', fecha_publicacion: '', fuente: '', departamento: '' });
    } catch (err) {
      setError(err.message);
      setMensaje('');
    }
  };

  return (
    <div className="container">
      <h2>Crear Nueva Noticia</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="titulo" placeholder="Título" value={noticia.titulo} onChange={handleChange} required />
        <input type="text" name="resumen" placeholder="Resumen" value={noticia.resumen} onChange={handleChange} required />
        <textarea name="contenido" placeholder="Contenido" value={noticia.contenido} onChange={handleChange} required />
        <input type="date" name="fecha_publicacion" value={noticia.fecha_publicacion} onChange={handleChange} required />
        <input type="text" name="fuente" placeholder="Fuente" value={noticia.fuente} onChange={handleChange} required />
        <input type="text" name="departamento" placeholder="Departamento" value={noticia.departamento} onChange={handleChange} required />
        <button type="submit" className="primary">Crear Noticia</button>
      </form>

      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button className="secondary" onClick={() => navigate('/menu')}>Volver al menú</button>
    </div>
  );
}

export default CrearNoticia;
