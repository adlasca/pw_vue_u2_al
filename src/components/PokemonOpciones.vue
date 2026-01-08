<template>
  <div class="pokeOpciones-container"> 
    <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {
    
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
    border:none;
    cursor: pointer;
    width: 250px;
    height: 30px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    line-height: 30px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.pokeOpciones-container {
  display: flex;
  justify-content: center;
}
</style>