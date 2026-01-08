import axios from "axios";

const consumirAPI= async (id) =>{
    const respuesta= axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.data)
    return respuesta;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerVectorNumerico=()=>{
    let vector=[];
    for(let i=0; i<4; i++){
        vector[i]= obtenerAleatorio(1,600); 
    }
    return vector;
}

const obtenerPokeVector=(vectorNumerico)=>{
    const data1=consumirAPI(vectorNumerico[0]);
    const data2=consumirAPI(vectorNumerico[1]);
    const data3=consumirAPI(vectorNumerico[2]);
    const data4=consumirAPI(vectorNumerico[3]);
    const obj1={
        nombre:data1.name,
        id:data1.id,
    }
}

