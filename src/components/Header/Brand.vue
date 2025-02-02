<template>
  <div class="brand">
    <div class="bloc-one">
      <img src="/public/img/image 3 (Traced).svg" alt="icon" />
      <img src="/public/img/image 4 (Traced).png" alt="icon" />
    </div>
    <div class="bloc-two">
      <img src="/public/img/image 5 (Traced).png" alt="icon" />
      <img src="/public/img/image 6 (Traced).png" alt="icon" />
    </div>
  </div>
</template>

<style scoped>
.brand {
  margin-top: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: calc(var(--index) * 7);
  .bloc-one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--index) * 7);
  }
  .bloc-two {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--index) * 7);
  }
  @media (max-width: 440px) {
    .bloc-one {
      img:nth-child(1) {
        width: calc(var(--index) * 5);
      }
      img:nth-child(2) {
        width: calc(var(--index) * 5);
      }
    }
    .bloc-two {
      img:nth-child(1) {
        width: calc(var(--index) * 10);
      }
      img:nth-child(2) {
        width: calc(var(--index) * 5);
      }
    }
  }
}
</style>
