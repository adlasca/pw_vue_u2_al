<template>
  <div>
    <img
      src="https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif"
      alt="Imagen relacionada con la pregunta"
    />
    <div class="pregunta-container">
      <input type="text" placeholder="Hacer pregunta" />
      <p>Debes terminar con el signo de pregunta</p>
      <h2>Esto es una pregunta?</h2>
      <h2>SÍ, NO</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>
 
<style>
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
  font-family: 'Arial', sans-serif;
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

h1, h2, p {
  margin: 5px 0;
}

p {
  font-size: 14px;
  font-style: italic;
}

h2 {
  margin-top: 30px;
}
</style>

