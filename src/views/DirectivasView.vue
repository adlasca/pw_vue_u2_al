<template>
  <div class="view-container">
    <Directivas />
    <h2>Tabla</h2>
  </div>
</template>

<script>
import Directivas from "../components/Directivas.vue";
export default {
  components: {
    Directivas,
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-family: 'Courier New', Courier, monospace;
  margin-top: 20px;
  
}

</style>