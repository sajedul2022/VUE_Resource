<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-6">
        <br />
        <h1>Form</h1>
        <br />
        <pre>
            <!-- {{ JSON.stringify(formValues, null, 8) }} -->
        </pre>
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              v-model.trim="formValues.name"
            />
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.lazy="formValues.email"
            />
          </div>
          <div class="form-group">
            <label >Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <label >Age</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Age"
              v-model.number="formValues.age"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">District</label>
            <select class="form-control" v-model="formValues.district">
              <option disable selected value="">Select One</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylet">Sylet</option>
            </select>
          </div>

          <div class="form-group">
            <label>Gender</label> <span></span><span></span>
            <div class="form-check">
              <input type="radio" value="Male" v-model="formValues.gender" />
              Male
            </div>

            <div class="form-check">
              <input type="radio" value="Female" v-model="formValues.gender" />
              Female
            </div>
          </div>

          <div class="form-group">
            <label>Education</label>
            <select
              class="form-control"
              v-model="formValues.education"
              multiple
            >
              <option disable selected value="">Select One</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div class="form-group">
            <label>Courses</label>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                value="PHP"
                v-model="formValues.courses"
              /> PHP
            </div>
            <div class="form-check">
              
              <input
                type="checkbox"
                class="form-check-input"
                value="JAVA"
                v-model="formValues.courses"
              /> Java
            </div>
            
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        district: "",
        gender: "",
        education: [],
        courses: [],
        age: null,
      },
    };
  },
  methods: {
    onSubmit(event) {
        event.preventDefault();

        alert(JSON.stringify(this.formValues, null, 8));

        console.log(this.formValues)
        
    },
  },
};
</script>
<style lang=""></style>
