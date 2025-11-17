import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Menú de Noticias</h2>
      <p>Bienvenido a la aplicación de gestión y análisis de noticias financieras.
Este sistema integra información del mercado, noticias relevantes y herramientas básicas de análisis técnico para apoyar la toma de decisiones en empresas del S&P 500.

Puedes administrar todas las noticias registradas y, además, consultar la documentación oficial del API para integrar el sistema con otras aplicaciones.</p>

      <ul className="menu-list">
        <li><button className="secondary" onClick={() => navigate('/listanoticias')}>Lista todas las noticias</button></li>
        <li><button className="primary" onClick={() => navigate('/crearnoticia')}>Crear noticia</button></li>
        <li><button className="primary" onClick={() => navigate('/actualizarnoticia')}>Actualizar noticia</button></li>
        <li><button className="danger" onClick={() => navigate('/eliminarnoticia')}>Eliminar noticia</button></li>
      </ul>

      <button className="secondary" onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  );
}

export default MenuPage;
