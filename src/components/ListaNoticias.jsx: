import React, { useState, useEffect } from 'react';
import { getAllNoticias, deleteNoticia } from '../api';

function ListaNoticias() {
    const [noticias, setNoticias] = useState([]);

    const cargarNoticias = async () => {
        try {
            const data = await getAllNoticias();
            setNoticias(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleEliminar = async (id) => {
        try {
            await deleteNoticia(id);
            cargarNoticias();
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        cargarNoticias();
    }, []);

    return (
        <div>
            <h2>Noticias Financieras</h2>
            {noticias.map(n => (
                <div key={n.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
                    <h3>{n.titulo}</h3>
                    <p>{n.resumen}</p>
                    <small>{n.fecha_publicacion}</small><br/>
                    <button onClick={() => handleEliminar(n.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}

export default ListaNoticias;
