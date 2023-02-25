<script setup>
  import axios from 'axios';
</script>

<template>
  <div>
    <li>
      <a href="#" @click="addProductToCart"  > <i class="fa fa-shopping-cart"></i></a>
    </li>
  </div>
</template>

<script>

export default {

  

  props: ['pr_id'],

  methods: {
    addProductToCart() {
    
      // alert("Product ID " + this.pr_id);

       axios.post("/cart", { prid: this.pr_id})
      .then((response) =>{
        alert(response.data);
      })

    },
  },
};
</script>
<style></style>
