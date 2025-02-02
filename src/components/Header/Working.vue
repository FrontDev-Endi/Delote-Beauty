<script setup>
  import { ref } from "vue";
  import BlocOne from './Bloc-one.vue';
  import BlocTwo from './Bloc-two.vue';
  import BlocThree from './Bloc-three.vue';
  import BlocFour from './Bloc-four.vue';

  const Blocone = ref(true);
  const Bloctwo = ref(false);
  const Blocthree = ref(false);
  const Blocfour = ref(false);

  const showAll = () => {
    Blocone.value = true;
    Bloctwo.value = false;
    Blocthree.value = false;
    Blocfour.value = false;
  };

  const showHairdressing = () => {
    Blocone.value = false;
    Bloctwo.value = true;
    Blocthree.value = false;
    Blocfour.value = false;
  };

  const showManicure = () => {
    Blocone.value = false;
    Bloctwo.value = false;  
    Blocthree.value = true;
    Blocfour.value = false;
  };

  const showPedicure = () => {
    Blocone.value = false;
    Bloctwo.value = false;  
    Blocthree.value = false;
    Blocfour.value = true;
  };
</script>

<template>
  <div id="working">
    <h1 class="title">Our works</h1>
    <ul class="working__list">
      <li class="working__item" @click="showAll" :class="{ active: Blocone }">Show all</li>
      <li class="working__item" @click="showHairdressing" :class="{ active: Bloctwo }">Hairdressing services</li>
      <li class="working__item" @click="showManicure" :class="{ active: Blocthree }">Manicure</li>
      <li class="working__item" @click="showPedicure" :class="{ active: Blocfour }">Pedicure</li>
    </ul>
    <BlocOne v-if="Blocone"  />
    <BlocTwo v-if="Bloctwo" />
    <BlocThree v-if="Blocthree" />
    <BlocFour v-if="Blocfour" />
  </div>
</template>

<style scoped>
#working {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 2s ease-out;
  /* gap: calc(var(--index) * 1.5); */
  margin-top: 168px;
  .title {
    font-family: "Cormorant Garamond", sans-serif;
    font-weight: 700;
    font-size: calc(var(--index) * 3.6);
    /* font-size: 48px; */
    line-height: calc(var(--index) * 5);
    text-align: center;
    color: #fff;
  }
  .working__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--index) * 1.5);
    margin-top: 40px;
    padding-bottom: 55px;
    .working__item {
      font-family: "Cormorant Garamond", sans-serif;
      cursor: pointer;
      font-weight: 700;
      font-size: 21px;
      line-height: 31px;
      text-align: center;
      color: #fff;
    }
    .active {
      color: #cdaa7d;
      border-bottom: 1px solid #cdaa7d;
    }
  }
  @media (max-width: 500px) {
    .working__list {
      flex-direction: column;
    }
  }
}
</style>
