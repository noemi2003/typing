import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Game from "../views/Game.vue";
import MakeGame from "../views/MakeGame.vue";
import store from "../store/index";
import AllGame from "../views/AllGame.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/makegame",
    name: "MakeGame",
    component: MakeGame,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/allgame",
    name: "AllGame",
    component: AllGame,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
