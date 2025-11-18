import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Api = () => {
  return (
    <div className="container">
      <h2>Documentación de la API</h2>
      <SwaggerUI url="/swagger/noticias.yaml" />
    </div>
  );
};

export default Api;
