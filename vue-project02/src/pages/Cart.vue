<template lang="">
  <div class="container">
    <div class="col-md-2"></div>

    <div class="col-md-8">
      <h2>Shopping Cart</h2>
      <h4>{{ $store.state.counter }}</h4>
      <p>Counter: {{ $store.getters.getCounter }}</p>
      <p>Normalized: {{ $store.getters.getNormalizedCounter }}</p>
    
      <!-- <button @click="$store.commit('increment', 10)">Increment</button> -->
      <button @click="incrementCounter">Increment</button>

    </div>
  </div>
</template>

<script>
export default {
    methods: {
    incrementCounter() {
      this.$store.dispatch('increment')
    }
  }
};
</script>
<style lang=""></style>
