import React, { useState } from 'react';
import { deleteNoticia } from '../api';

function EliminarNoticia() {
    const [idEliminar, setIdEliminar] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleEliminar = async () => {
        try {
            const data = await deleteNoticia(idEliminar);
            setMensaje(data.message);
            setError('');
            setIdEliminar('');
        } catch (err) {
            setError(err.message);
            setMensaje('');
        }
    };

    return (
        <div>
            <h2>Eliminar Noticia</h2>
            <input type="number" placeholder="ID Noticia" value={idEliminar} onChange={(e) => setIdEliminar(e.target.value)} />
            <button onClick={handleEliminar}>Eliminar</button>
            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default EliminarNoticia;
