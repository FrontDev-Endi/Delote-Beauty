<script setup>
import Procedure from "./Procedure.vue";
</script>

<template>
  <h1 class="title">Our Masters</h1>
  <div class="procedures">
    <Procedure
      image="/img/Elena.png"
      title="Amelia"
      description="Makeup artist"
    />
    <Procedure
      image="/img/Elena 2.png"
      title="Amelia"
      description="Makeup artist"
    />
    <Procedure
      image="/img/Elena 3.png"
      title="Amelia"
      description="Makeup artist"
    />
    <Procedure
      image="/img/Elena 4.png"
      title="Amelia"
      description="Makeup artist"
    />
    <Procedure
      image="/img/Elena 5.png"
      title="Amelia"
      description="Makeup artist"
    />
    <Procedure
      image="/img/Elena 6.png"
      title="Amelia"
      description="Makeup artist"
    />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin-top: 80px;
  padding-bottom: 80px;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #fff;
}
.procedures {
  margin-top: 30px;
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
