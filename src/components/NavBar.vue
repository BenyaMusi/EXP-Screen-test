<template>
  <div class="nav">
    <router-link to="/" class="title">Screen test</router-link>
    <div class="forLogout" v-if="this.$store.state.stateLogin == true">
      <div class="logout" @click="onLogout">Logout</div>
    </div>
    <div class="forLogin" v-else>
      <router-link to="/login" class="login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    onLogout() {
      this.$store.state.stateLogin = false;
      this.$router.push("/");
    },
  },
};
</script>

<style>
.nav {
  height: var(--nav-height);
  padding: 0px 30px;
  background: linear-gradient(0deg, rgb(10, 7, 63) 0%, rgb(58, 48, 113) 100%);
  box-shadow: 0px 5px 5px rgb(138, 138, 138);
}
.title,
.forLogin,
.forLogout {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  float: left;
  font-size: 30px;
}
.login,
.logout,
.forLogin,
.forLogout {
  color: #ffffff;
  float: right;
  font-size: 16px;
  text-decoration: none;
}
.login.router-link-exact-active {
  color: #2261ff;
}
.logout {
  cursor: pointer;
}
</style>
