<template lang="">
  <div>Count {{count}}</div> <br>
  <button  v-on:click="increment" >Click</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(){
        this.count++
    }
  },

  
  mounted() {
    
    this.increment();
    console.log(this.increment());
  },
};
</script>
<style lang=""></style>
