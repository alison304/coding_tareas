import axios from "axios";

export const getCharacters = (id) => axios.get(`https://swapi.dev/api${id}`);



