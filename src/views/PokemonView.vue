<template>
  <div class="poke-container">
    <h1>Pokedex</h1>
    <PokemonImagen :pokemonId="pokeGanador" />
    <PokemonOpciones
      @pokeSeleccionado="evaluarGanador($event)"
      :pokeLista="pokeArr"
    />
    
  </div>
  <div class="poke-msj">
    <h1>{{ msj }}</h1>
    <button @click="iniciarJuego()">Iniciar</button>
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import {
  obtenerVectorPokemonFacade,
  obtenerAleatorioFacade,
} from "../clients/PokeClient.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokeArr: [],
      pokeGanador: null,
      msj:null
    };
  },
  //mounted: Se ejecuta despues de que se renderiza el componente
  mounted() {
    this.iniciarJuego();
  },
  methods: {
    async iniciarJuego() {
      this.pokeArr = await obtenerVectorPokemonFacade();
      this.pokeGanador = this.pokeArr[obtenerAleatorioFacade(0, 3)].id;
        this.msj=null;
    },
    evaluarGanador(idGanador) {
      console.log("valor desde padre:");
      console.log(idGanador);
      if (idGanador === this.pokeGanador) {
        this.msj="¡Ganaste!";
      } else {
        this.msj="¡Perdiste!";
      }
    },
  },
};
</script>


<style scoped>
.poke-container {
  background: rgb(233, 20, 20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  border: solid black 2px;
  border-radius: 10px;
  margin: auto;
}
h1 {
  text-align: center;
  color: rgb(0, 0, 0);
}
.poke-msj {
  margin-top: 20px;
  text-align: center;
  color:aqua
}
button {
  background-color: rgb(22, 158, 101);
  border-radius: 5px;
  border: solid rgb(85, 23, 23) 1px;
  cursor: pointer;
  width: 100px;
  height: 30px;
  font-weight: bold;
}
</style>