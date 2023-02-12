<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import Nav from "./layouts/Nav.vue";



export default {
  components: { Header, Footer, Nav,}
};
</script>

<template>

  <Header />

  <Nav />

  <router-view/>
  

 

  <Footer/>

</template>

<style></style>
