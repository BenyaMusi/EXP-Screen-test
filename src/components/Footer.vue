<template>
  <div class="footer">
    <div class="row">
      <div class="col-4">
        <div>Hello, I'm Benyapha Musikarayakun.</div>
        <div>This is my first screen test.</div>
      </div>
      <div class="col-4">
        <div>tel: 099-7972275</div>
        <div>email: benyapha1002@gmail.com</div>
      </div>
      <div class="col-4">
        <div>Thank you</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style>
.footer {
  padding-left: 20%;
  height: var(--footer-height);
  color: #fff;
  background: linear-gradient(0deg, rgb(58, 48, 113) 0%, rgb(10, 7, 63) 100%);
}
.row {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
