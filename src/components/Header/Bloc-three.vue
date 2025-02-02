<template>
  <div class="bloc-two">
    <div class="bloc-one">
      <img src="/img/Manicure1.jpg" alt="image" />
      <img src="/img/2.jpg" alt="image" />
      <img src="/img/Manicure 3.jpg" alt="image" />
      <img src="/img/Manicure 4.jpg" alt="image" />
      <img src="/img/Manicure 5.jpg" alt="image" />
      <img src="/img/Manicure 6.jpg" alt="image" />
      <img src="/img/Manicure 7.jpg" alt="image" />
      <img src="/img/work-3.png" alt="image" />
      <img src="/img/work-7.png" alt="image" />
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
