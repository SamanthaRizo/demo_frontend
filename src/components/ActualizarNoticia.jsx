import React, { useState } from 'react';
import { getNoticiaById, updateNoticia } from '../api';

function ActualizarNoticia() {
    const [idActualizar, setIdActualizar] = useState('');
    const [noticia, setNoticia] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleIdChange = (e) => {
        setIdActualizar(e.target.value);
        setNoticia(null);
        setMensaje('');
        setError('');
    };

    const handleInputChange = (e) => setNoticia({ ...noticia, [e.target.name]: e.target.value });

    const buscarNoticia = async () => {
        try {
            const data = await getNoticiaById(idActualizar);
            setNoticia(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setNoticia(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!noticia) return;

        try {
            const data = await updateNoticia(idActualizar, noticia);
            setMensaje(data.mensaje);
            setError('');
        } catch (err) {
            setError(err.message);
            setMensaje('');
        }
    };

    return (
        <div>
            <h2>Actualizar Noticia</h2>
            <div>
                <input type="number" placeholder="ID Noticia" value={idActualizar} onChange={handleIdChange} />
                <button onClick={buscarNoticia}>Buscar</button>
            </div>

            {noticia && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="titulo" value={noticia.titulo || ''} onChange={handleInputChange} placeholder="Título" required />
                    <input type="text" name="resumen" value={noticia.resumen || ''} onChange={handleInputChange} placeholder="Resumen" required />
                    <input type="text" name="contenido" value={noticia.contenido || ''} onChange={handleInputChange} placeholder="Contenido" required />
                    <input type="date" name="fecha_publicacion" value={noticia.fecha_publicacion || ''} onChange={handleInputChange} required />
                    <input type="text" name="fuente" value={noticia.fuente || ''} onChange={handleInputChange} placeholder="Fuente" required />
                    <input type="text" name="departamento" value={noticia.departamento || ''} onChange={handleInputChange} placeholder="Departamento" required />
                    <button type="submit">Actualizar Noticia</button>
                </form>
            )}

            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default ActualizarNoticia;
