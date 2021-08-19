import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Menu.vue"),
  },
  {
    path: "/UA",
    name: "useracc",
    redirect: "/assets/user_accept.pdf"
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;