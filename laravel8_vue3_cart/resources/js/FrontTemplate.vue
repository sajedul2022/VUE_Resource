<script setup>
import Topbar from "./components/templates/TopbarVue.vue";
import NavBar from './components/templates/NavBar.vue'
import Footer from './components/templates/Footer.vue'
</script>
<template>
  <div>
  

    <!-- Header Section Begin -->
    <header class="header">
      <TopbarVue />
      <NavBar/>
    </header>
    <!-- Header Section End -->

    <router-view> </router-view>


    <Footer></Footer>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>