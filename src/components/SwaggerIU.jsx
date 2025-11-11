import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerDocument from "../api/swagger.json"; // o swagger.yaml si configuraste loader

function SwaggerPage() {
  return (
    <div style={{ margin: "20px" }}>
      <h2>📖 Documentación API</h2>
      <SwaggerUI spec={swaggerDocument} />
    </div>
  );
}

export default SwaggerPage;
