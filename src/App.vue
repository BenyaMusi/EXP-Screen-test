<template>
  <NavBar />
  <div class="middel">
    <div class="side"><SideBar /></div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  <FooterPage />
  <!-- <div class="hello">hello</div> -->
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import FooterPage from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    SideBar,
    FooterPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
body {
  margin: 0;
  height: 100%;
  background: rgb(255, 255, 255);
  --nav-height: 70px;
  --footer-height: 70px;
}
.middel {
  height: calc(100vh - var(--nav-height) - var(--footer-height));
  display: grid;
  grid-template-columns: 1fr 5fr;
}
.side {
  overflow: auto;
}

a:hover {
  color: #ada5ff;
}
</style>
