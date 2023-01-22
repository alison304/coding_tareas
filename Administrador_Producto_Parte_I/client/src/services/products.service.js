import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getProducts = () => {
    return axios.get(`${BASE_URL}/products/`);
}

export const getProduct = (id) => {
    return axios.get(`${BASE_URL}/products/${id}`);
}

export const createProduct = (product) => {
    return axios.post(`${BASE_URL}/products/`, product);
}
