<template lang="">
  <div>{{ author.books.length > 0  ? "yes" : "No" }} </div>
  <div>Total Books: {{ totalBooks }} </div>
  <div>By Method Total Books: {{ calculateBooks() }} </div>
  <div>Time : {{ now }} </div>
</template>

<script>
export default {

  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  methods: {
  calculateBooks() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
},
  computed: {
    totalBooks(){
        return this.author.books.length
    },
    now() {
    return Date.now()
  }
  }
};
</script>

<style lang=""></style>
