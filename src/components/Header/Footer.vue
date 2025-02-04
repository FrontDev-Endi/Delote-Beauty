<template>
  <div class="header-footer">
    <hr />
    <div class="content">
      <div class="foot-logo">
        <img src="/public/img/logo.png" alt="logo" />
      </div>
      <div class="contact">
        <h1>Contacts</h1>
        <p>+0 (000)000-00-00</p>
        <p>+0 (000)000-00-00</p>
      </div>
      <div class="operating-mode">
        <h1>Operating mode</h1>
        <p>Monday - Friday</p>
        <p>10:00 - 21:00</p>
      </div>
    </div>
    <hr />
    <div class="copy">
      <p>© 2023 Delote Beauty</p>
    </div>
  </div>
</template>

<style scoped>
.header-footer {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--index) * 10);
    padding-top: calc(var(--index) * 3);
    padding-bottom: calc(var(--index) * 3);
    .foot-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .contact {
      display: flex;
      flex-direction: column;
      gap: calc(var(--index) * 0.3);
      h1 {
        font-family: "Cormorant Garamond", sans-serif;
        font-weight: 700;
        font-size: calc(var(--index) * 0.9);
        line-height: calc(var(--index) * 1);
        color: #fff;
      }
      p {
        font-family: "Cormorant Garamond", sans-serif;
        font-weight: 400;
        font-size: calc(var(--index) * 0.7);
        line-height: calc(var(--index) * 0.7);
        color: #fff;
      }
    }
    .operating-mode {
      display: flex;
      flex-direction: column;
      gap: calc(var(--index) * 0.3);
      h1 {
        font-family: "Cormorant Garamond", sans-serif;
        font-weight: 700;
        font-size: calc(var(--index) * 0.9);
        line-height: calc(var(--index) * 1);
        color: #fff;
      }
      p {
        font-family: "Cormorant Garamond", sans-serif;
        font-weight: 400;
        font-size: calc(var(--index) * 0.7);
        line-height: calc(var(--index) * 0.7);
        color: #fff;
      }
    }
  }
  hr {
    width: 68%;
    height: 1px;
    background: #fff;
    border: none;
    opacity: 0.5;
  }
  .copy {
    margin-top: 30px;
    margin-bottom: 35px;
    p {
      font-family: "Cormorant Garamond", sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #fff;
    }
  }
  @media (max-width: 800px) {
    .content {
      gap: calc(var(--index) * 4);
      .contact {
        h1 {
          font-size: calc(var(--index) * 1.2);
          line-height: calc(var(--index) * 1.2);
        }
        p {
          font-size: calc(var(--index) * 1);
          line-height: calc(var(--index) * 1);
        }
      }
      .operating-mode {
        h1 {
          font-size: calc(var(--index) * 1.2);
          line-height: calc(var(--index) * 1.2);
        }
        p {
          font-size: calc(var(--index) * 1);
          line-height: calc(var(--index) * 1);
        }
      }
    }
  }
  @media (max-width: 550px) {
    .content {
      gap: calc(var(--index) * 2);
    }
  }
  @media (max-width: 400px) {
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      gap: calc(var(--index) * 4);
      .contact {
        h1 {
          font-size: calc(var(--index) * 1.6);
          line-height: calc(var(--index) * 1.6);
        }
        p {
          font-size: calc(var(--index) * 1.2);
          line-height: calc(var(--index) * 1.2);
        }
      }
      .operating-mode {
        h1 {
          font-size: calc(var(--index) * 1.6);
          line-height: calc(var(--index) * 1.6);
        }
        p {
          font-size: calc(var(--index) * 1.2);
          line-height: calc(var(--index) * 1.2);
        }
      }
    }
  }
}
</style>
