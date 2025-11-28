<!--Elementos hmtl-->
<template>
  <div>
    <h1>{{ tit }}</h1>
    <p >{{ numero }} <sup>2</sup>={{ obtenerCuadrado() }}</p>
    <p>{{ numero }} <sup>2</sup>={{ obtenerCuadrado() }}</p>
    <p>{{ numero }} <sup>3</sup>={{ obtenerCubo }}</p>
    <p>{{ numero }} <sup>3</sup>={{ obtenerCubo }}</p>
    <div id="botones">
      <button id="boton" @click="incrementar">Incrementar en 1</button>
      <button id="boton" @click="reducir">Reducir en 1</button>
      <button v-show="mostrar">Prueba</button>
    </div>
  </div>
</template>
<!--Directivas: Palabra clave que permite a vue manipular el DOM de manera reactiva-->
<!-- Elementos Js-->
<script>
export default {
  //---Options API---
  //Propiedades compustadas:
  //Elementos que se ejecutan solo si cambian los datos reactivos que utilizan
  //Se definen en la seccion computed, se declara igual que un metodo
  data() {
    return {
      numero: this.inicio,
      titulo: "Contador",
    };
  },
  methods: {
    obtenerCuadrado() {
      //Cuando se usa propiedad reactiva se usa this
      console.log("Calculando el cuadrado de ", this.numero);
      return this.numero * this.numero;
    },
    incrementar() {
      console.log(this.tit);
      this.numero++;
    },
    reducir() {
      this.numero--;
    },
  },
  computed: {
    obtenerCubo() {
      console.log("Calculando el cubo de ", this.numero);
      return this.numero * this.numero * this.numero;
    },
    //props: variables que se pasan de un componente padre a un componente hijo
  },
  //Si es un props de numero usar "v-bind:" o solo ":"
  //props:['tit','inicio','mostrar']
  props: {
    tit: String,
    inicio: {
      type:Number,
      default:1,
      validator(value){
        return value>10;
      }
    },
    mostrar: Boolean,
  },
  //Tipos de props: String, Number, Boolean, Array, Object, Date, funcion, BigInt(enteros grandes)
};
</script>

<!-- Elementos CSS-->
<style>
h1,
p {
  color: rgb(51, 51, 102);
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
}
#boton {
  display: block;
  margin: 0 auto 15px auto;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 1cap;
}
#botones {
  text-align: center;
}
</style>