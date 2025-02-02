<script setup>
  import Procedure from './Procedure.vue'
</script>

<template>
  <div id="procedures">
    <Procedure image="/img/curler.png" title="Hairdressing services" />
    <Procedure image="/img/manicure.png" title="Manicure" />
    <Procedure image="/img/Pedicure.png" title="Pedicure" />
    <Procedure image="/img/mask.png" title="Cosmetology" />
    <Procedure image="/img/cream.png" title="Body aesthetician" />
    <Procedure image="/img/visage.png" title="Visage" />
  </div>
</template>

<style scoped>
  #procedures {
    margin-top: 95px;
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }
</style>