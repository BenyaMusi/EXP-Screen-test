<template>
  <div class="landing">
    <div v-if="this.$store.state.stateLogin == true">
      <h1>Login already(≧∇≦)ﾉ</h1>
    </div>
    <div v-else>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
      <h1>Hello, This is My Screen test's landing page.</h1>
    </div>
  </div>
</template>

<style>
.landing {
  overflow: auto;
  background-image: url("../assets/wallpaper.jpg");
  background-size: 100%;
  opacity: 0.9;
  text-align: center;
}
.landing h1 {
  color: rgb(152, 152, 152);
  margin-top: 5%;
}
.landing::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f567;
}
.landing::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f567;
}
.landing::-webkit-scrollbar-thumb {
  background-color: #302d6a;
}
</style>
