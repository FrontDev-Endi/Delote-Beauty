<template>
  <div class="item">
    <div class="content">
      <div class="text">
        <h1>Women's styling</h1>
        <p>+ hair tip treatment</p>
      </div>
      <h2>100$</h2>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .content {
    display: flex;
    .text {
      padding-bottom: 20px;
      h1 {
        font-weight: 700;
        font-size: 27px;
        line-height: 35px;
        color: #fff;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        color: #fff;
      }
    }
    h2 {
      font-weight: 700;
      margin-left: calc(var(--index) * 10.5);
      font-size: 27px;
      line-height: 35px;
      text-align: right;
      color: #fff;
    }
  }
  @media (max-width: 415px) {
    .content {
      .text {
        padding-bottom: 20px;
        h1 {
          font-weight: 700;
          font-size: 20px;
          line-height: 35px;
          color: #fff;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 33px;
          color: #fff;
        }
      }
      h2 {
        font-weight: 700;
        margin-left: calc(var(--index) * 10.5);
        font-size: 23px;
        line-height: 35px;
        text-align: right;
        color: #fff;
      }
    }
  }
  hr {
    position: absolute;
    border: 1px solid #fff;
    width: 28%;
    height: 0px;
    margin-top: 50px;
    opacity: 0.5;
    z-index: -1;
  }
}
</style>
