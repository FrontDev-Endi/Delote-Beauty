<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Menu from "./Menu.vue";

const backgroundScale = ref(1);
const contentOpacity = ref(1);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const maxScroll = window.innerHeight;

  if (scrollPosition <= maxScroll) {
    backgroundScale.value = 1 + scrollPosition / maxScroll;
    contentOpacity.value = 1 - scrollPosition / maxScroll;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="head"
    :style="{
      backgroundImage: 'url(\'/img/bgc.png\')',
      transform: `scale(${backgroundScale})`,
      opacity: backgroundScale > 1.8 ? 0 : 1,
    }"
  >
    <Menu />
    <div class="head__content">
      <h1 class="head__title">
        Beauty salon <br />
        «Delote-Beauty»
      </h1>
      <div class="head__cursor">
        <img src="/public/img/mouse.svg" alt="cursor" />
        <p>Scroll down</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head {
  position: fixed;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.1s ease-out, opacity 0.3s ease-out;
  z-index: -1;
  .head__content {
    transition: opacity 0.3s ease-out;
  }
  .head__content {
    .head__title {
      /* margin-top: 260px; */
      margin-top: calc(var(--index) * 10);
      font-family: "Cormorant Garamond", sans-serif;
      font-weight: 700;
      font-size: calc(var(--index) * 3.5);
      line-height: calc(var(--index) * 5);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
    }
    .head__cursor {
      display: flex;
      align-items: center;
      justify-content: center;
      /* margin-top: 300px; */
      margin-top: calc(var(--index) * 6.5);
      img {
        margin-right: 10px;
      }
      p {
        font-family: "Cormorant Garamond", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
      }
    }
    @media (max-width: 425px) {
      .head__cursor {
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-top: 300px; */
        margin-top: calc(var(--index) * 20);
      }
    }
  }
}
</style>
