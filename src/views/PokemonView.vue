<template>
    <div class="poke-container">
        <h1>Pokedex</h1>
        <PokemonImagen :pokemonId="15"/>
        <PokemonOpciones/>
    </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

export default {
    components: {
        PokemonImagen,
        PokemonOpciones,
    },
};
</script>


<style scoped>
    .poke-container{
        background: rgb(233, 20, 20);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 350px;
        border: solid black 2px;
        border-radius: 10px;
        margin: auto;
    }
    h1{
        text-align: center;
        color: white;
    }
</style>