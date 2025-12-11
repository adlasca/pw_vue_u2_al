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
    <hr />
    <label for="id_nombre_1">Nombre:</label>
    <input v-model="nombre" @keyup.enter="agregarEstudiante1" id="id_nombre_1" type="text" />
    <label for="id_apellido_1">Apellido:</label>
    <input v-model="apellido" @keyup.enter="agregarEstudiante1" id="id_apellido_1" type="text" />
    <ul>
      <li
        v-show="nombre || apellido"
        v-for="{ nombre, apellido } in arreglo"
        :key="nombre"
      >
        {{ nombre }} - {{ apellido }}
      </li>
    </ul>
    <h2>
      <Table>
        <td>Nombre</td>
        <td>Apellido</td>
        <tr v-for="{ nombre, apellido } in arreglo" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
        </tr>
      </Table>
    </h2>
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
    },agregarEstudiante() {
        const est = { nombre: this.nombre, apellido: this.apellido };
        console.log(est);
        this.arreglo.push(est);
        this.limpiarFormulario();
      },
    agregarEstudiante1(event) {
        const est = { nombre: this.nombre, apellido: this.apellido };
        console.log(est);
        console.log(event.charCode);
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

</style>