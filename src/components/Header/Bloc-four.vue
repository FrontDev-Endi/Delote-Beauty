<template>
  <div class="bloc-two">
    <div class="bloc-one">
      <img src="/img/Pedicure (1).jpg" alt="image" />
      <img src="/img/Pedicure (2).jpg" alt="image" />
      <img src="/img/Pedicure (3).jpg" alt="image" />
      <img src="/img/Pedicure (4).jpg" alt="image" />
      <img src="/img/Pedicure (5).jpg" alt="image" />
      <img src="/img/Pedicure (6).jpg" alt="image" />
      <img src="/img/Pedicure (7).jpg" alt="image" />
      <img src="/img/Pedicure (8).jpg" alt="image" />
      <img src="/img/Pedicure (9).jpg" alt="image" />
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
