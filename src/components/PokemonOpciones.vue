<template>
  <div class="pokeOpciones-container"> 
    <ul>
        <li v-on:click="pasarPadre(pokemon.id)" v-for="pokemon in pokeLista" :key="pokemon.id" >{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
      pokeLista:{
        type:Array,
        required:true
      }
    },
    methods:{
        pasarPadre(id){
            console.log(id);
            //Emite un evento al componente padre
            this.$emit('pokeSeleccionado', id);
        }
    }
};
</script>

<style scoped>
ul { 
  list-style-type: none;
  padding: 0;
}
li{
    background-color: rgb(22, 158, 101);
    border-radius: 5px;
    border:solid rgb(85, 23, 23) 1px;
    cursor:pointer ;
    
    width: 250px;
    height: 30px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    line-height: 30px;
    font-family: Helvetica;
}

.pokeOpciones-container {
  display: flex;
  justify-content: center;
}
</style>