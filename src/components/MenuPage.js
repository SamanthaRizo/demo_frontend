import React from "react";
import { useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Menú de Noticias</h2>
      <p>
        Bienvenido al panel de gestión de noticias financieras. Este sistema permite realizar análisis técnico de empresas del S&P500 y análisis de sentimiento de noticias relacionadas, ayudando a identificar posibles tendencias de mercado basadas en indicadores como el "Golden Cross".
      </p>

      <ul className="menu-list">
        <li>
          <button className="secondary" onClick={() => navigate("/listanoticias")}>
            Lista todas las noticias
          </button>
        </li>
        <li>
          <button className="primary" onClick={() => navigate("/crearnoticia")}>
            Crear noticia
          </button>
        </li>
        <li>
          <button className="primary" onClick={() => navigate("/actualizarnoticia")}>
            Actualizar noticia
          </button>
        </li>
        <li>
          <button className="danger" onClick={() => navigate("/eliminarnoticia")}>
            Eliminar noticia
          </button>
        </li>
        <li>
          <button className="info" onClick={() => navigate("/api")}>
            API
          </button>
        </li>
      </ul>

      <h3>Propósito del sistema</h3>
      <p>
        El sistema está diseñado para usuarios con conocimientos en programación y finanzas, proporcionando análisis automático de datos financieros y noticias, facilitando la toma de decisiones basada en indicadores objetivos y análisis de sentimiento.
      </p>
    </div>
  );
}

export default MenuPage;
