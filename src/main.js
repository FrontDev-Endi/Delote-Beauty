import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Header from "./components/Header/Header.vue";
import Masters from "./components/Masters/Masters.vue";
import Price from "./components/Price/Price.vue";
import Contacts from "./components/Contacts/Contacts.vue";

const router = createRouter({
  routes: [
    {
      path: "/", component: Header
    },
    {
      path: "/masters", component: Masters
    },
    {
      path: "/price", component: Price
    },
    {
      path: "/contacts", component: Contacts
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
