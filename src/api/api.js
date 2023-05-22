import axios from "axios";// esta es una libreria que nos permite hacer peticiones http

 export const api = axios.create({
    baseURL:"http://localhost:5000"
})

// funcion que nos permite conecarnos con base url y  concatenarla con la url que queremos 
export const buscar = async (url, setData) =>{
    const respuesta = await api.get(url)
    setData(respuesta.data)
}