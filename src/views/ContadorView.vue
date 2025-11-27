<template>
  <div>
    <Contador tit="Contador 1" :inicio="3" :mostrar="false"/>
    <Contador tit="Contador 2" :inicio="5" :mostrar="true"/>
  </div>
</template>

<script>
import Contador from "../components/Contador.vue";
export default {
  components: {
    Contador,
  },
};
</script>

<style>
</style>