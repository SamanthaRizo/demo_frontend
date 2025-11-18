// src/components/Api.jsx
import React, { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useNavigate } from "react-router-dom";

function Api() {
  const navigate = useNavigate();
  const [specUrl, setSpecUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${process.env.PUBLIC_URL || ""}/swagger/noticias.yaml`;
    // Intentamos HEAD para detectar 404 rápido
    fetch(url, { method: "HEAD" })
      .then((res) => {
        if (res.ok) setSpecUrl(url);
        else throw new Error(`No se encontró swagger en ${url} (status ${res.status})`);
      })
      .catch((err) => {
        console.error("Error cargando swagger:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="container">
      <h2>Documentación de la API</h2>

      <button className="secondary" onClick={() => navigate("/menu")} style={{ marginBottom: "20px" }}>
        Volver al menú
      </button>

      {error && (
        <div>
          <p style={{ color: "red" }}>Error cargando documentación: {error}</p>
          <p>Verifica que <code>public/swagger/noticias.yaml</code> exista y sea accesible.</p>
          <p>URL intentada: <code>{`${process.env.PUBLIC_URL || ""}/swagger/noticias.yaml`}</code></p>
        </div>
      )}

      {specUrl ? (
        <SwaggerUI url={specUrl} />
      ) : !error ? (
        <p>Cargando documentación...</p>
      ) : null}
    </div>
  );
}

export default Api;
