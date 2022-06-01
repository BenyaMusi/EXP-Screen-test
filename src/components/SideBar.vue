<template>
  <div class="sidebar">
    <div class="regis">สมัครสมาชิก</div>
    <div class="side_menu">
      <img src="../assets/03.png" />
      <div class="sub">
        <h2>HOT GAME</h2>
        <h2>ยอดนิยม</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/05.png" />
      <div class="sub">
        <h2>HOT GAME</h2>
        <h2>คาสิโนสด</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/01.png" />
      <div class="sub">
        <h2>SLOT</h2>
        <h2>สล็อตเกมส์</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/01.png" />
      <div class="sub">
        <h2>SPORT</h2>
        <h2>กีฬา</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/03.png" />
      <div class="sub">
        <h2>FISHING</h2>
        <h2>ยิงปลา</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/05.png" />
      <div class="sub">
        <h2>SKILL GAME</h2>
        <h2>สกิลเกมส์</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/01.png" />
      <div class="sub">
        <h2>E-SPORT</h2>
        <h2>อีสปอร์ต</h2>
      </div>
    </div>
    <div class="side_menu">
      <img src="../assets/03.png" />
      <div class="sub">
        <h2>SOOD</h2>
        <h2>กลยุทธ์</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>
<style>
.sidebar {
  color: #fff;
  overflow: auto;
  padding: 6px;
}
.sidebar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f567;
}
.sidebar::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f567;
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: #010243;
}
.regis {
  font-size: 5px;
  background: radial-gradient(
    circle,
    rgba(195, 248, 255, 1) 0%,
    rgba(91, 176, 254, 1) 82%,
    rgba(70, 95, 252, 1) 100%
  );
  height: 8px;
  border-radius: 10px;
  text-align: center;
  text-shadow: 0px 2px 5px rgb(5, 12, 93);
  border: 1px solid white;
  padding-top: 2px;
  cursor: pointer;
}
.side_menu {
  display: grid;
  grid-template-columns: 2fr 3fr;
  background: rgb(29, 90, 169);
  border-radius: 5px;
  padding: 0px 5px;
  height: 18px;
  margin: 3px 0px;
  align-items: center;
  cursor: pointer;
}
.side_menu img {
  width: 11px;
}
.side_menu h2 {
  font-size: 3px;
  margin: 0px;
}
</style>
