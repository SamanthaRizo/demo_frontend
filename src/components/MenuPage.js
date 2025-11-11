import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const navigate = useNavigate();

  const goTo = (path) => navigate(path);

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>📰 Panel de Gestión de Noticias</h1>
      <p>Bienvenido al panel de administración de noticias financieras</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <button onClick={() => goTo('/listanoticias')} style={buttonStyle}>Lista todas las noticias</button>
        <button onClick={() => goTo('/crearnoticia')} style={buttonStyle}>Crear noticia</button>
        <button onClick={() => goTo('/actualizarnoticia')} style={buttonStyle}>Actualizar noticia</button>
        <button onClick={() => goTo('/eliminarnoticia')} style={buttonStyle}>Eliminar noticia</button>
        <button onClick={() => goTo('/swagger')} style={buttonStyle}>Documentación API (Swagger)</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: '1px solid #007bff',
  backgroundColor: '#007bff',
  color: 'white',
  transition: '0.3s',
};

export default MenuPage;
