import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue"

Vue.use(VueRouter);

const routes = [{
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
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
  scrollBehavior(to, from, savedPosition) {
    if (to.name == from.name) {
      return savedPosition
    }
    return {
      selector: "#app"

    }
  }
});

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   return next()
// })

export default router;