import React from "react";
import { useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Menú Principal</h2>
      <p>Bienvenido a la aplicación de gestión y análisis de noticias financieras.
Este sistema integra información del mercado, noticias relevantes y herramientas básicas de análisis técnico para apoyar la toma de decisiones en empresas del S&P 500.

Puedes administrar todas las noticias registradas y, además, consultar la documentación oficial del API para integrar el sistema con otras aplicaciones.</p>

      <div className="container">
      <h2>Menú Principal</h2>
      <button className="primary" onClick={() => navigate("/listanoticias")}>Lista de Noticias</button>
      <button className="primary" onClick={() => navigate("/crearnoticia")}>Crear Noticia</button>
      <button className="primary" onClick={() => navigate("/actualizarnoticia")}>Actualizar Noticia</button>
      <button className="primary" onClick={() => navigate("/eliminarnoticia")}>Eliminar Noticia</button>
      <button className="primary" onClick={() => navigate("/api")}>API</button> {/* igual estilo */}
    </div>
  );
}

export default MenuPage;
