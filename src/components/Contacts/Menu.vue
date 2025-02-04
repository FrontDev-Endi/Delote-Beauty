<script setup>
 const addtoclass = () => {
    const Menu = document.querySelector(".menu__list");
    Menu.classList.toggle("links-active");
  }
</script>

<template>
  <div class="menu">
    <img class="menu__logo__two" src="/public/img/logo.png" alt="logo" />
    <ul class="menu__list">
      <img
        src="/public/img/cross.svg"
        class="menu__cross"
        alt="cross"
        @click="addtoclass()"
      />
      <router-link to="/" class="menu__item">
        <a href="#" class="menu__link"> Home </a>
      </router-link>
      <router-link to="/masters" class="menu__item">
        <a href="#" class="menu__link"> Masters </a>
      </router-link>
      <li class="menu__item">
        <a href="#" class="menu__link"> Services </a>
      </li>
      <img class="menu__logo__one" src="/public/img/logo.png" alt="logo" />
      <router-link to="/price" class="menu__item">
        <a href="#" class="menu__link"> Price </a>
      </router-link>
      <li class="menu__item">
        <a href="#working" class="menu__link"> Our works </a>
      </li>
      <router-link to="/contacts" class="menu__item">
        <a href="#" class="menu__link active"> Contacts </a>
      </router-link>
    </ul>
    <img
      src="/public/img/Group 1.svg"
      class="menu__line"
      alt="line"
      @click="addtoclass()"
    />
    <hr />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  flex-direction: column;
  .menu__line {
    display: none;
  }
  .menu__logo__two {
    display: none;
  }
  .menu__list {
    display: flex;
    gap: calc(var(--index) * 3);
    padding-bottom: 30px;
    .menu__logo__one {
      padding-left: calc(var(--index) * 1.5);
      padding-right: calc(var(--index) * 1.5);
    }
    .menu__item {
      display: flex;
      align-items: center;
      justify-content: center;
      .menu__link {
        font-family: "Cormorant Garamond", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
        cursor: pointer;
        transition: all 0.1s ease;
        &:hover {
          color: #f1d1b3;
        }
      }
      .active {
        color: #f1d1b3;
        border-bottom: 1px solid #f1d1b3;
      }
    }
    .menu__cross {
      display: none;
    }
  }
  hr {
    border: 1px solid #fff;
    width: 1296px;
    width: calc(var(--index) * 40);
    height: 0px;
    opacity: 0.5;
  }
}
@media (max-width: 850px) {
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    .menu__line {
      display: block;
    }
    .menu__logo__two {
      display: block;
    }
    .menu__list {
      position: absolute;
      top: 0;
      right: 0;
      visibility: hidden;
      transform: translateX(100%);
      padding-top: 100px;
      flex-direction: column;
      text-align: center;
      gap: calc(var(--index) * 1.5);
      width: 230px;
      height: 100vh;
      background: #111;
      transition: 0.5s, visibility 0.5s;
      .menu__cross {
        display: block;
        position: absolute;
        top: 40px;
        right: 45px;
      }

      .menu__logo__one {
        display: none;
      }
    }
    hr {
      display: none;
    }
    .links-active {
      visibility: visible;
      transform: translateX(0%);
    }
  }
}
</style>
