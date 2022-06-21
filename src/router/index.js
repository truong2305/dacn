/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import firebase from '../firebase'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import(/* webpackChunkName: "about" */ "../views/Chart.vue"),
  },
  {
    path: "/control",
    name: "Control",
    component: () => import(/* webpackChunkName: "about" */ "../views/Control.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  let user = store.state.user;
  if (user == "" && (to.name == "Control" || to.name == "Settings")) {
    next("/login");
  } else  if (user != "" && (to.name == "Login")) {
    if(confirm("log out ?")) {
      firebase.auth().signOut()
      store.commit('user', '')
      next();
    } else {
      return
    }
  } else {
    next();
  }
});

export default router;
