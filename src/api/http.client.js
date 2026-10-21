// Base URL
const BASE_URL = import.meta.env.VITE_API_URL;

// Timeout
const TIMEOUT_MS = 15000;

// Read JSON
async function readJSON(response) {
    try {
        return await response.json();
    } catch {
        return null;
    }
}

// Request
async function request(method, path, body) {

    let response;

    try {
        response = await fetch(`${BASE_URL}${path}`, {
            method,
            credentials: 'include',
            headers: body ? { 'Content-Type': 'application/json' } : undefined,
            body: body ? JSON.stringify(body) : undefined,
            signal: AbortSignal.timeout(TIMEOUT_MS)
        });
    } catch {
        throw new Error('Unable to reach the server. Please try again.');
    }

    const data = await readJSON(response);

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