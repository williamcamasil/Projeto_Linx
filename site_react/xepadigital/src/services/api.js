import Axios from 'axios';

export const api = Axios.create({
    // baseURL : "http://localhost/api", //Rodado no server (DEPLOY)
    baseURL: "http://localhost:5000/api", //Rodada localmente
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-xepa")  
    }
});

export default api;


export const apiForm = Axios.create({
    // baseURL : "http://localhost/api", //Rodado no server (DEPLOY)
    baseURL: "http://localhost:5000/api", //Rodada localmente
    headers: {
        // "Content-Type" : "multipart/form-data",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-xepa")  
    }
});