<template lang="">
  <div class="container mt-5">
    <h2 style="text-align: center">Products</h2>
    <div class="row">

      <div class="col-md-12">
        <h2>Search</h2>
            <form v-on:submit.prevent="search" >
                <input type="text" v-model="searchItem" placeholder="Search.." >
                <button type="submit" >Search</button>
            </form>
            <p>{{searchItem}}</p>
      </div>

    </div>
    <hr />
    <div class="row">
      <div class="col-md-12">
        <h2>Search</h2>
      </div>
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

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      searchItem: "",
      searchResult: "",

    };
  },
  methods: {

    search(){
        axios.post("http://127.0.0.1:8000/api/search/",{
            item: this.searchItem
        })
        .then((response) => {
            // this.products = response.data;
            console.log(response.data);
    });
    }
  },

  mounted() {
    // axios.get("http://localhost:8000/api/products").then((response) => {
    //   this.products = response.data;
    // });
  },
};
</script>

<style lang=""></style>
