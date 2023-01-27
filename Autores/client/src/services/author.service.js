import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getAuthorList = () => {
    return axios.get(`${BASE_URL}/api/author/`);
}

export const getAuthor = (id) => {
    return axios.get(`${BASE_URL}/api/author/${id}`);
}

export const createAuthor = (Author) => {
    return axios.post(`${BASE_URL}/api/author/`, Author);
}

export const editAuthor = (id, Author) => {
    return axios.put(`${BASE_URL}/api/author/${id}`, Author);
}

export const deleteAuthor = (id) => {
    return axios.delete(`${BASE_URL}/api/author/${id}`);
}