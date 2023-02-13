<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>


      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/app">CSS Work</RouterLink> |
        <RouterLink to="/method">Methods Work</RouterLink>
      </nav>
  
  <RouterView />

</template>

<style scoped>

</style>
