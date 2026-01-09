<template>
  <div class="pokeImg-container">
    <img
      :src="srcImagen"
      alt="Pokemon Image"
    />
  </div>
</template>

<script>
export default {
    props:{
        pokemonId:{
            type: Number,
            required:true,
        }
    },
    computed:{
        srcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
        //backpicks (` argumento `) para llamar cualquier variable JS dentro de una cadena con ${}
    }
};
</script>

<style>
img {
  width: 200px;
  background-color: rgb(28, 104, 190);
  border-radius: 10px;
  border: solid black 2px;
  height: 200px;
}
.pokeImg-container {
  display: flex;
  justify-content: center;
}
</style>