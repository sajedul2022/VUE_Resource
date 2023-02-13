<template lang="">
  <div class="container mt-5">
    <h2 style="text-align: center">Products</h2>
    <div class="row">
      <div class="col-md-12">
        <h2>Search</h2>
        <form v-on:submit.prevent="search">
          <input type="text" v-model="searchItem" placeholder="Search.." />
          <button type="submit">Search</button>
        </form>
        <p>
          " {{ searchItem }} " - Total: {{ searchResult.length }} results found.
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-12">
        <h2>Search Results</h2>
      </div>
      <div class="col-md-10">
        <ol>
          <li v-for="(search, index) in searchResult" :key="search.id">
            <div class="col-sm-8">
              <h5>ID: {{ search.id }}</h5>
              <h5>Name: {{ search.product_name }}</h5>

              <p>
                Details: {{ search.product_details }}
              </p>
              <hr />
            </div>
          </li>
        </ol>
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
      searchResult: [],
    };
  },
  methods: {
    search() {
      axios
        .post("http://127.0.0.1:8000/api/search/", {
          item: this.searchItem,
        })
        .then((response) => {
          // this.products = response.data;
          this.searchResult = response.data;
          console.log(response.data);
        });
    },
  },

  mounted() {
    // axios.get("http://localhost:8000/api/products").then((response) => {
    //   this.products = response.data;
    // });
  },
};
</script>

<style lang=""></style>
