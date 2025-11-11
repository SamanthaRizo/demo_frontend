import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Menú de Noticias</h2>
      <p>Bienvenido al panel de gestión de noticias</p>

      <ul className="menu-list">
        <li><button className="primary" onClick={() => navigate('/listanoticias')}>Lista todas las noticias</button></li>
        <li><button className="primary" onClick={() => navigate('/crearnoticia')}>Crear noticia</button></li>
        <li><button className="primary" onClick={() => navigate('/actualizarnoticia')}>Actualizar noticia</button></li>
        <li><button className="primary" onClick={() => navigate('/eliminarnoticia')}>Eliminar noticia</button></li>
      </ul>
    </div>
  );
}

export default MenuPage;
