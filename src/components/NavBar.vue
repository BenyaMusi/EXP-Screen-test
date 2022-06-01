<template>
  <div class="nav">
    <div><img class="title" @click="onHome" src="../assets/anya06.png" /></div>
    <div></div>
    <div class="nav_menu">
      <img src="../assets/01.png" />
      <div>กลยุทธ์</div>
    </div>
    <div class="nav_menu">
      <img src="../assets/03.png" />
      <div>โปรโมชั่น</div>
    </div>
    <div class="nav_menu">
      <img src="../assets/05.png" />
      <div>สิทธิพิเศษ</div>
    </div>
    <div class="forLogout" v-if="this.$store.state.stateLogin == true">
      <div class="logout" @click="onLogout">ออกจากระบบ</div>
    </div>

    <div class="forLogin" v-else>
      <div class="login" @click="onLogin">เข้าสู่ระบบ</div>
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
    onLogin() {
      this.$store.state.stateLogin = false;
      this.$router.push("/login");
    },
    onHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.nav {
  height: var(--nav-height);
  padding: 0px 10px 0px 20px;
  background: linear-gradient(0deg, rgb(12, 20, 37) 0%, rgb(37, 83, 168) 100%);
  display: grid;
  grid-template-columns: 2fr 13fr 1fr 1fr 1fr 2fr;
}
.nav_menu {
  font-size: 3px;
  color: #ffffff;
  text-align: center;
  background: rgb(29, 90, 169);
  border-radius: 0px 0px 5px 5px;
  width: 18px;
  margin-right: 3px;
  height: var(--nav-height);
  cursor: pointer;
}
.nav_menu img {
  width: 8px;
  position: relative;
  top: 20%;
  margin-bottom: 5px;
}
.title {
  width: 15px;
  cursor: pointer;
}
.forLogin,
.forLogout {
  color: #ffffff;
  font-size: 5px;
  text-decoration: none;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
}
.forLogin,
.forLogout {
  background: linear-gradient(0deg, rgb(231, 189, 73) 0%, rgb(247, 232, 135) 100%);
  height: 9px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid white;
}
.login,
.logout {
  align-items: center;
  color: #2b33da;
  text-decoration: none;
  position: relative;
  top: 15%;
  cursor: pointer;
}
</style>
