import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ya no hay autenticación, así que solo redirigimos al inicio o login
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Menú de Noticias</h2>
      <p>Bienvenido al panel de gestión de noticias</p>

      <ul>
        <li><a href="/listanoticias">Lista todas las noticias</a></li>
        <li><a href="/crearnoticia">Crear noticia</a></li>
        <li><a href="/actualizarnoticia">Actualizar noticia</a></li>
        <li><a href="/eliminarnoticia">Eliminar noticia</a></li>
      </ul>

      <button onClick={handleLogout}>Volver al inicio</button>
    </div>
  );
}

export default MenuPage;

  );
}

export default MenuPage;
