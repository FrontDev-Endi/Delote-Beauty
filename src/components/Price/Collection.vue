<script setup>
import Item from "./Item.vue";
</script>

<template>
  <div class="collection">
    <h1 class="title">Prices for services</h1>
    <div class="content">
      <div class="one">
        <img src="/public/img/image.png" alt="" />
        <div class="bloc-one">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div class="two">
        <img src="/public/img/image.png" alt="" />
        <div class="bloc-one">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div class="three">
        <img src="/public/img/image.png" alt="" />
        <div class="bloc-one">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  .title {
    font-weight: 700;
    font-size: calc(var(--index) * 1.7);
    line-height: calc(var(--index) * 2);
    text-align: center;
    color: #fff;
  }
  @media (max-width: 768px) {
    .title {
      font-size: calc(var(--index) * 3);
    }
  }
  .content {
    display: flex;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: calc(var(--index) * 3.2);
    .one {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      gap: calc(var(--index) * 2);
      .bloc-one {
        display: flex;
        flex-direction: column;
        gap: calc(var(--index) * 2);
      }
      img {
        width: calc(var(--index) * 20);
      }
    }
    @media (max-width: 900px) {
      .one {
        flex-direction: column;
      }
    }
    .two {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      gap: calc(var(--index) * 2);
      .bloc-one {
        display: flex;
        flex-direction: column;
        gap: calc(var(--index) * 2);
      }
      img {
        width: calc(var(--index) * 20);
      }
    }
    @media (max-width: 900px) {
      .two {
        flex-direction: column;
      }
    }
    .three {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: calc(var(--index) * 2);
      .bloc-one {
        display: flex;
        flex-direction: column;
        gap: calc(var(--index) * 2);
      }
      img {
        width: calc(var(--index) * 20);
      }
    }
    @media (max-width: 900px) {
      .three {
        flex-direction: column;
      }
    }
  }
}
</style>
