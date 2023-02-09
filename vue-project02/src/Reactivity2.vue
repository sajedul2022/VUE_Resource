<template lang="">
  <div>Count {{ obj.nested.count }}</div>
  <div>Array {{ obj.arr }}</div>
  <button v-on:click="mutateDeeply" >Add</button>
  <br />
  
</template>

<script>
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
    };
  },
  methods: {
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++;
      this.obj.arr.unshift("baz");
    },
  },
};
</script>
<style lang=""></style>
