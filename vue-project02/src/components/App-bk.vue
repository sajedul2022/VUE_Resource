<script>
export default {
  el: "#app",
  data() {
    return {
      name: "sajedul",
      age: 22,
      address: "Mirpur",
      college: "<h2>Dhaka College</h2>",
      ifActive: true
    };
  },
};
</script>

<template>
  <h1>Hello {{ name }}!</h1>
  <p>Age: {{ age }}</p>
  <p>Address: {{ address }}</p>
  <p v-html="college"></p>

  <div id="app" >
    <button v-on:click="ifActive = !ifActive">Click to Toggle</button>

    <h1 :class="{ active: ifActive, error: !ifActive }">Change Color</h1>
  </div>

</template>

<style>
.active {
  color: green;
}
.error {
  color: red;
}
</style>
