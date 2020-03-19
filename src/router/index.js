import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(path) {
  return () => import("../views/" + path);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
