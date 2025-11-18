import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import MenuPage from "./components/MenuPage";
import ListaNoticias from "./components/ListaNoticias";
import CrearNoticia from "./components/CrearNoticia";
import ActualizarNoticia from "./components/ActualizarNoticia";
import EliminarNoticia from "./components/EliminarNoticia";
import VerNoticia from "./components/VerNoticia";   // ← IMPORTANTE
import Api from "./components/Api";                 // ← IMPORTANTE

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/listanoticias" element={<ListaNoticias />} />
        <Route path="/crearnoticia" element={<CrearNoticia />} />
        <Route path="/actualizarnoticia" element={<ActualizarNoticia />} />
        <Route path="/eliminarnoticia" element={<EliminarNoticia />} />
        <Route path="/noticia/:id" element={<VerNoticia />} />


        {/* ← Página Swagger */}
        <Route path="/api" element={<Api />} />

        {/* Redirección */}
        <Route path="/" element={<Navigate to="/menu" />} />
      </Routes>
    </Router>
  );
}

export default App;

