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

const obtenerPokeVector=async (vectorNumerico)=>{
    const data1= await consumirAPI(vectorNumerico[0]);
    const data2= await consumirAPI(vectorNumerico[1]);
    const data3= await consumirAPI(vectorNumerico[2]);
    const data4= await consumirAPI(vectorNumerico[3]);
    const obj1={
        nombre:data1.name.toUpperCase(),
        id:data1.id,
    }
    const obj2={
        nombre:data2.name.toUpperCase(),
        id:data2.id,
    }
    const obj3={
        nombre:data3.name.toUpperCase(),
        id:data3.id,
    }
    const obj4={
        nombre:data4.name.toUpperCase(),
        id:data4.id,
    }
    return [obj1, obj2, obj3, obj4];
}

export async function obtenerVectorPokemonFacade(){
    const pokeVector= obtenerVectorNumerico();
    return obtenerPokeVector(pokeVector);
}

export function obtenerAleatorioFacade(min, max) {
    return obtenerAleatorio(min, max);
}