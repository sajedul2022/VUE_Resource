// pages
import Home from "./pages/Home.vue";
import Shop from "./pages/Shop.vue";
import CartList from "./pages/CartList.vue";

// Routing
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/shop", component: Shop },
    { path: "/cartlist", component: CartList },
];

const router = createRouter({
history: createWebHistory(),
routes, // short for `routes: routes`
linkActiveClass: "active"
});

export default router;