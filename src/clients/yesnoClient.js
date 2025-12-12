import axios from "axios";

// Función para consumir la API de yesno.wtf
//metodo GET
//El await espera la respuesta de la promesa
//Luego se retorna la respuesta obtenida
//La función es asíncrona
//El await viene por defecto en las funciones async en las ultimas versiones de JS

const consumirAPI= async () =>{
    const respuesta= axios.get('https://yesno.wtf/api')
    .then(r => r.data)
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacade() {
    return await consumirAPI();
}

export async function consumirAPIFacade2() {
    return await consumirAPI();
}
