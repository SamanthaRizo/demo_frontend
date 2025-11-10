import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Menú de Noticias</h2>
      {user && <p>Bienvenido, {user}!</p>}
      <ul>
        <li><a href="/listanoticias">Lista todas las noticias</a></li>
        <li><a href="/crearnoticia">Crear noticia</a></li>
        <li><a href="/actualizarnoticia">Actualizar noticia</a></li>
        <li><a href="/eliminarnoticia">Eliminar noticia</a></li>
      </ul>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default MenuPage;
