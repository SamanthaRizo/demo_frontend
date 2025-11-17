import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Api = () => (
  <div className="container">
    <h2>API - Documentación</h2>
    <SwaggerUI url="/swagger/noticias.yaml" />
  </div>
);

export default Api;
