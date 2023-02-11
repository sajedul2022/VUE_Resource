<template>
  <div>
    <h3>Name: {{ name }}</h3> <br />
    <!-- <button v-on:click=" name='Karim' " > Click </button> <br> -->
    <button v-on:click="setname('php')">Click</button>
    <button @click="greet">Greet</button>
  </div>
  <hr>

  <!-- <h1 @mouseover="count++" >{{ count }}</h1> -->
  <h1>{{ count }}</h1>

  <button @click="count++" >Add</button>
  <button @click="count--" >Increase</button> <br>
  <button @click="count +=5" >Count + 5</button>
  <button @click="count -=5" >Count - 5</button>

</template>

<script>
export default {
  data() {
    return {
      name: "Sajedul",
      count: 0,
    };
  },

  methods: {
    setname(x) {
      this.name = x;
    },

    greet(event) {
      alert(`Hello ${this.name}! And Count is ${this.count} `);

    //   if (event) {
    //     alert(event.target.tagName);
    //   }
    },
  },
};
</script>
<style></style>
