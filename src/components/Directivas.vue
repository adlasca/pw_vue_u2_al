<template>
  <div>
    <label id="id_nombre" for="">Nombre</label>
    <input v-model="nombre" id="id_nombre" type="text" />
    <p>Hola, {{ nombre }} {{ apellido }}</p>

    <label for="id_apellido">Apellido</label>
    <input v-model="apellido" id="id_apellido" type="text" />

    <button v-on:click="imprimirNombre()">Imprimir Nombre</button>
    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
    <h1>{{ arreglo }}</h1>
    <ul>
      <li
        v-show="nombre ||apellido"
        v-for="{ nombre, apellido } in arreglo"
        :key="nombre"
      >
        {{ nombre }} - {{ apellido }}
      </li>
    </ul>
    <h2><Table>
        <td>Nombre</td>
        <td>Apellido</td>
        <tr v-for="{ nombre, apellido } in arreglo" :key="nombre">
          <td >{{ nombre }}</td>
          <td >{{ apellido }}</td>
        </tr>
    </Table></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      arreglo: [],
    };
  },
  methods: {
    imprimirNombre() {
      console.log(this.nombre);
    },
    agregarEstudiante() {
      const est = { nombre: this.nombre, apellido: this.apellido };
      console.log(est);
      this.arreglo.push(est);
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.nombre = null;
      this.apellido = null;
    },
  },
};
</script>

<style>
table, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
}
div {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
}
</style>