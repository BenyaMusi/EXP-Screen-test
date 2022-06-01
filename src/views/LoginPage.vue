<template>
  <div class="login">
    <div class="container">
      <h1>Login</h1>
      <form class="form-group" @submit.prevent="onSubmit">
        <div>
          <input
            v-model="userLogin"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            v-model="passLogin"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="miss"><br /></div>
        <div><button class="btn" @click="onSubmit">Submit</button></div>
      </form>
    </div>
    <img src="../assets/โทเกะจิบิ02.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLogin: "",
      passLogin: "",
      emptyFields: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.userLogin === "testexp" && this.passLogin === "1234") {
        this.$store.state.stateLogin = true;
        this.$router.push("/");
        console.log("submit");
        console.log(this.$store.state.stateLogin);
      } else if (this.userLogin === "" || this.passLogin === "") {
        this.emptyFields = true;
        console.log("submit2");
        console.log(this.$store.state.stateLogin);
      } else {
        document.getElementsByClassName("miss")[0].innerHTML =
          "The username or password is incorrect";
        console.log("submit3");
        console.log(this.$store.state.stateLogin);
      }
    },
  },
};
</script>

<style>
.login {
  top: 0px;
  overflow: auto;
  text-align: center;
}
.login img {
  margin-top: 10px;
  width: 15%;
}
.container h1 {
  font-size: 15px;
  color: #000;
}
.container {
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.card {
  padding: 10px;
}
.form-group input {
  margin-bottom: 5px;
}
.form-control {
  font-size: 8px;
  width: 100px;
  height: 15px;
  border: 1px solid #ced4da;
}
.btn {
  background: rgb(6, 14, 131);
  background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
  border: none;
  color: white;
  font-size: 8px;
  height: 20px;
  width: 50px;
}
.btn:hover {
  background: rgb(0, 3, 255);
  background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
}
.miss {
  font-size: 8px;
  color: red;
}
.hide {
  display: none;
}
</style>
