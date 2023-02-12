<template lang="">
  <div class="container mt-5">
    <h2 style="text-align: center">Products</h2>
    <hr />
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <div v-for="(product, index) in products" :key="product.index">
          <div class="col-sm-8">
            <h2>ID: {{ product.id }}</h2>
            <h3>{{ product.product_name }}</h3>

            <p>
              {{ product.product_details }}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import axios from "axios";


export default {
  data() {
    return {
        products: [],
    };
  },

  mounted() {
    axios.get("http://localhost:8000/api/products")
    .then((response) => {
      this.products = response.data;
    })
  }
};

</script>

<style lang=""></style>
