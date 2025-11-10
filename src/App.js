import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ListaNoticias from './components/ListaNoticias';
import CrearNoticia from './components/CrearNoticia';
import ActualizarNoticia from './components/ActualizarNoticia';
import EliminarNoticia from './components/EliminarNoticia';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<PrivateRoute><MenuPage /></PrivateRoute>} />
          <Route path="/listanoticias" element={<PrivateRoute><ListaNoticias /></PrivateRoute>} />
          <Route path="/crearnoticia" element={<PrivateRoute><CrearNoticia /></PrivateRoute>} />
          <Route path="/actualizarnoticia" element={<PrivateRoute><ActualizarNoticia /></PrivateRoute>} />
          <Route path="/eliminarnoticia" element={<PrivateRoute><EliminarNoticia /></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
