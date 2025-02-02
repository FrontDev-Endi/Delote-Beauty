<template>
  <div class="bloc-two">
    <div class="bloc-one">
      <img src="/img/hairdress 1.jpg" alt="image" />
      <img src="/img/hairdress 8.png" alt="image" />
      <img src="/img/hairdress 2.jpg" alt="image" />
      <img src="/img/hairdress 3.jpg" alt="image" />
      <img src="/img/hairdress 4.jpg" alt="image" />
      <img src="/img/hairdress 5.jpg" alt="image" />
      <img src="/img/hairdress 9.png" alt="image" />
      <img src="/img/hairdress 6.jpg" alt="image" />
      <img src="/img/hairdress 7.jpg" alt="image" />
    </div>
  </div>
</template>

<style scoped>
.bloc-one {
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  flex-wrap: wrap;
  gap: 24px;
  img{
    width: 416px;
    height: 416px;
    object-fit: cover;
  }
}
</style>
