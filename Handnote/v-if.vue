<template lang="">
  <h1 v-if="score>=8" > Score is {{score }}, Excellent </h1>
  <h1 v-else-if="score>=6" > Score is {{score }},  Good </h1>
  <h1 v-else >Score is {{score }},  Poor </h1>
  <hr/>    

  <ul v-if="fruits">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
  </ul>

  <hr/>  
</template>

<script>
export default {
    data(){
        return{
            score:12,
            fruits : true,

        }
    }
};
</script>

<style lang=""></style>
