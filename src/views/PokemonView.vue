<template>
  <div class="poke-container">
    <h1>Pokedex</h1>
    <PokemonImagen v-if="mostrar" :pokemonId="pokeGanador" />
    <PokemonOpciones
      @pokeSeleccionado="evaluarGanador($event)"
      :pokeLista="pokeArr"
    />
  </div>
  <div class="poke-msj">
    <h1>{{ msj }}</h1>
    <button @click="iniciarJuego()">Iniciar</button>
    <button @click="destruir()">Destruir</button>
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
      msj: null,
      mostrar: true,
    };
  },
  //mounted: Se ejecuta despues de que se renderiza el componente
  //Fases del ciclo de vida de un componente
  //1. Creacion
  beforeCreate() {
    console.log("Apenas inicia la instancia del componente");
  },
  created() {
    console.log("Se resolvieron data, computed, methods y watchers");
  },
  //2. Montaje: Se renderiza el componente
  beforeMount() {
    console.log("Antes de renderizar el componente");
  },
  mounted() {
    this.iniciarJuego();
  },
  //3. Actualizacion: Se actualiza el DOM
  //beforeUpdate: Se ejecuta antes de que el DOM se actualice, sufra algun cambio en el data o props
  beforeUpdate() {
    console.log(
      "beforeUpdate:Cambio de data o props, antes de re-renderizar el DOM"
    );
  },
  updated() {
    console.log("Updated: Se actualizo tras la re-renderizacion del DOM");
  },
  //4. Desmontaje: Se desmonta el componente

  methods: {
    async iniciarJuego() {
      this.pokeArr = await obtenerVectorPokemonFacade();
      this.pokeGanador = this.pokeArr[obtenerAleatorioFacade(0, 3)].id;
      this.msj = null;
        this.mostrar = true;
    },
    evaluarGanador(idGanador) {
      console.log("valor desde padre:");
      console.log(idGanador);
      if (idGanador === this.pokeGanador) {
        this.msj = "¡Ganaste!";
      } else {
        this.msj = "¡Perdiste!";
      }
    },
    destruir() {
      this.mostrar = false;
    },
    crear() {
      this.mostrar = true;
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
  color: aqua;
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