<template>
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)"> Submit </button>

  <button @click="(event)=>warn('Not Submit', event)" >Send</button>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    warn(message, event) {

      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>
<style lang=""></style>
