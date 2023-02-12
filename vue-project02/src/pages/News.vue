<template lang="">
  <div class="container mt-5">
    <h2 style="text-align: center">News</h2>
    <hr />
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <div v-for="(post, index) in posts" :key="post.index">
          <div class="col-sm-8">
            <h2>ID: {{ post.id }}</h2>
            <h3>{{ post.title }}</h3>
            <h5>Title description, Dec 7, 2020</h5>

            <p>
              {{ post.body }}
            </p>
            <hr />
          </div>
        </div>

        <vue-awesome-paginate
          :total-items="100"
          :items-per-page="5"
          :max-pages-shown="5"
          :current-page="1"
          :on-click="onClickHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
    });
  },

  methods: {
    onClickHandler(page) {
      console.log(page);
    },
  },
};
</script>

<!-- <script setup >
  const onClickHandler = (page: number) => {
    console.log(page);
  };
</script> -->

<style >
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
