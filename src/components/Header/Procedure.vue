<script setup>
  defineProps({
    title: String,
    image: String,
  });
</script>

<template>
  <div class="procedure">
    <div class="frame">
      <div class="frame__border"></div>
      <img class="frame__image" :src="image" alt="image" />
    </div>
    <h1 class="procedures__title">{{ title }}</h1>
  </div>
</template>

<style scoped>
.procedure {
  .frame {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 426px;
    height: 320px; */
    width: calc(var(--index) * 15);
    height: calc(var(--index) * 10.5);
    .frame__border {
      position: absolute;
      /* width: 396px; */
      width: 94%;
      height: 100%;
      border: 1px solid #cdaa7d;
      opacity: 0.5;
      z-index: -1;
    }
    .frame__image {
      margin-right: 30px;
      margin-top: 20px;
    }
  }
  .procedures__title {
    display: flex;
    font-family: "Garamond", sans-serif;
    font-weight: 400;
    font-size: 30px;
    font-size: calc(var(--index) * 1.1);
    line-height: 36px;
    color: #fff;
    text-align: center;
    margin-top: 30px;
  }
}
</style>
