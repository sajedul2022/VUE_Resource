import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
// import the createStore method
import { createStore } from 'vuex'
import App from "./App.vue"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import News from "./pages/News.vue"
import Products from "./pages/Products.vue"
import Search from "./pages/Search.vue"
import Cart from "./pages/Cart.vue"

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
    { path: '/cart', component: Cart },
  ];

  
  const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
  })

  // configure the store
const store = createStore({

  state() {
    return {
      counter: 0,
    }
  },

  mutations: {
    increment(state, payload) {
      // state.counter++
      state.counter = state.counter + payload
    }
  },

  getters: {
    getCounter(state) {
      return state.counter
    },
    // getNormalizedCounter(state, getter) {
    //   // get the getCounter() return
    //   // value from the object
    //   if (getter.getCounter >= 50) {
    //     return 50
    //   }
    //   return getter.getCounter
    // }
  },

  actions: {
    increment(context) {
      // commit 'increment' mutation
      // with a payload
      context.commit('increment', 10);
    }
  }

});
  
// createApp(App).use(VueAwesomePaginate).mount("#app");
// createApp(App).use(router, VueAwesomePaginate).mount('#app')

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
