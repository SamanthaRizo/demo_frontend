import React from "react";
import { useNavigate } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Api = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Documentación de la API</h2>
      
      {/* Botón para volver al menú principal */}
      <button 
        onClick={() => navigate("/menu")}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#FF9800",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        🏠 Volver al menú principal
      </button>

      {/* Swagger UI */}
      <SwaggerUI url="/swagger/noticias.yaml" />
    </div>
  );
};

export default Api;
