const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000'; // Asegúrate de tener REACT_APP_API_BASE_URL en tu .env

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en la solicitud');
    }
    return response.json();
};

export const getAllNoticias = async () => {
    const response = await fetch(`${apiBaseUrl}/noticias`);
    return handleResponse(response);
};

export const getNoticiaById = async (id) => {
    const response = await fetch(`${apiBaseUrl}/noticias/${id}`);
    return handleResponse(response);
};

export const createNoticia = async (noticia) => {
    const response = await fetch(`${apiBaseUrl}/noticias`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noticia),
    });
    return handleResponse(response);
};

export const updateNoticia = async (id, noticia) => {
    const response = await fetch(`${apiBaseUrl}/noticias/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noticia),
    });
    return handleResponse(response);
};

export const deleteNoticia = async (id) => {
    const response = await fetch(`${apiBaseUrl}/noticias/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al eliminar la noticia');
    }
    return { message: 'Noticia eliminada exitosamente' };
};
