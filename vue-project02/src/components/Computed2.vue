<template>
  <div>{{ fullName }}</div> 
  <!-- ToDoItems.filter(item => item.done).length -->
  <div>{{  }}</div> 

  <button v-on:click="changeNameSetter">Change Name</button>
</template>

<script>

export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  methods: {
  	
	changeNameSetter: function() {
        this.fullName = 'Mark Gonzales';
	}
},

  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
};
</script>

<style></style>
