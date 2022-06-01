<template>
  <NavBar />
  <div class="middel">
    <div class="side"><SideBar /></div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  <!-- <div class="hello">hello</div> -->
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;1,300&family=Kaushan+Script&family=Satisfy&family=Square+Peg&family=Tiro+Gurmukhi:ital@1&display=swap");
#app {
  font-family: "Kanit", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #fff;
}
body {
  margin: 0;
  height: 100%;
  background: rgb(255, 255, 255);
  --nav-height: 20px;
  --footer-height: 70px;
  overflow: hidden;
}
.middel {
  height: calc(100vh - var(--nav-height));
  display: grid;
  grid-template-columns: 3fr 17fr;
}
.side {
  overflow: auto;
  background: rgb(28, 26, 73);
}

a:hover {
  color: #ada5ff;
}
</style>
