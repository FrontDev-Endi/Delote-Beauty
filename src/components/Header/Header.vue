<script setup>
import Head from "./Head.vue";
import Procedures from "./Procedures.vue";
import Brand from "./Brand.vue";
import Working from "./Working.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <header class="header">
    <Head />
    <div class="container">
      <div class="quotes">
        <img src="/public/img/“.svg" alt="" class="quotes__img" />
        <h1 class="quotes__text__one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
          vitae amet.
          Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac
          ipsum ut. Sit
          elit, facilisi proin non malesuada sociis tristique. Viverra augue
          lorem ut quisque
          quam tortor, malesuada iaculis.
        </h1>
        <h1 class="quotes__text__two">
          Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
          viverra
          rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
          imperdiet
          sapien fringilla vestibulum sit fames.
        </h1>
      </div>
      <Procedures />
      <Brand />
      <Working />
      <Footer />
    </div>
  </header>
</template>

<style scoped>
.header {
  /* height: 1000vh; */
  .container {
    position: absolute;
    z-index: 2;
    margin-top: calc(var(--index) * 54);
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    .quotes {
      text-align: center;
      .quotes__img {
        width: calc(var(--index) * 6);
      }
      .quotes__text__one {
        margin-top: 60px;
        /* width: 45%; */
        width: calc(var(--index) * 33);
        font-family: "Cormorant Garamond", sans-serif;
        font-weight: 700;
        font-size: calc(var(--index) * 1.01);
        line-height: calc(var(--index) * 1.2);
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
      }
      .quotes__text__two {
        font-family: "Cormorant Garamond", sans-serif;
        font-weight: 700;
        /* width: 46%; */
        width: calc(var(--index) * 33);
        font-size: calc(var(--index) * 1.01);
        line-height: calc(var(--index) * 1.2);
        text-align: center;
        margin-top: calc(var(--index) * 1);
        color: #fff;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    .container {
      margin-top: calc(var(--index) * 69);
    }
  }
}

@media (max-width: 480px) {
  .header {
    .container {
      margin-top: calc(var(--index) * 100);
      .quotes {
        .quotes__text__one {
          width: calc(var(--index) * 24); 
        }
        .quotes__text__two {
          width: calc(var(--index) * 24);
        }
      }
    }
  }
}
</style>
