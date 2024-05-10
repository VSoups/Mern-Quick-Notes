import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export function addNote(note) {
    return sendRequest(`${BASE_URL}/add`, 'POST', { text: note });
}

export function getAll() {
    return sendRequest(`${BASE_URL}/index`);
}