import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import App from "./App.vue"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import News from "./pages/News.vue"
import Products from "./pages/Products.vue"
import Search from "./pages/Search.vue"

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";





const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/news', component: News },
    { path: '/products', component: Products },
    { path: '/search', component: Search },
  ];

  
  const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
  })
  
// createApp(App).use(VueAwesomePaginate).mount("#app");
createApp(App).use(router, VueAwesomePaginate).mount('#app')
  
