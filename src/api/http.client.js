// Base URL
const BASE_URL = 'http://localhost:5000';

// Request
async function request(method, path, body) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined
    });

    const data = await response.json();

    if (!response.ok) {
        const error = new Error(data?.message || 'Something went wrong.');
        error.status = response.status;
        throw error;
    }

    return data;
}

// HTTP Client
export default {
    get: (path) => request('GET', path),
    post: (path, body) => request('POST', path, body),
    patch: (path, body) => request('PATCH', path, body),
    delete: (path) => request('DELETE', path)
};