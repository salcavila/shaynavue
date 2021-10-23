import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
    Product,
  },
  {
    path: "/shoppingcart",
    name: "ShoppingCart",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ShoppingCart.vue"),
    ShoppingCart,
  },
  {
    path: "/success",
    name: "Success",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Success.vue"),
    Success,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
