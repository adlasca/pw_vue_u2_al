<template>
  <div>
    <img v-if="imagen"
      :src="imagen"
      alt="Error en imagen "
    />
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hacer pregunta" />
      <p>Debes terminar con el signo de pregunta</p>
      <h2>{{ pregunta }}</h2>
      <h2> {{ respuesta }}</h2>
      <h3>{{ contador }}</h3>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta:null,
      imagen: null,
      contador: 0,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      if (value.includes("?")) {
        // Llamar a la API solo si la pregunta termina con un signo de interrogación
        this.respuesta = "Cargando...";
        this.contador += 1;
        this.consumir();
      }
    },
  },
  methods: {
    async consumir() {
      const res = await consumirAPIFacade();
      console.log("Es una pregunta");
      console.log(res);
      console.log(res.answer);
      this.respuesta = res.answer;
      this.imagen = res.image;
    },
  },
};
import {
  consumirAPIFacade,
  consumirAPIFacade2,
} from "../clients/yesnoClient.js";
</script>
 
<style scoped>
img {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
.pregunta-container {
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
}

input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 200px;
  text-align: center;
}
input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

h1,
h2,
p {
  margin: 5px 0;
}

p {
  font-size: 14px;
  font-style: italic;
}

h2 {
  margin-top: 30px;
}
body {
  background-color: black;
  color: rgb(255, 255, 255);
}
</style>

