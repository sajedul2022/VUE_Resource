<template>

    <p>{{ thisInArrowFunc("Sajid") }}</p>

    <p>{{ thisInRegularFunc() }}</p>

    
</template>
  
<script>

  export default {

    data() {
      return {
        username: 'Obi-Wan Kenobi',
      }
    },
    methods: {

  
      thisInArrowFunc: (name) => {
        return 'New Name:  ' + name // no 'this' binding
      },
  
      thisInRegularFunc() {
        return 'Help us ' + this.username // global 'this'
      }
    }
  }

  </script>