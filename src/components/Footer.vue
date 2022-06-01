<template>
  <div class="footer">
    <div class="row">
      <div class="left">
        <span>เว็บคาสิโนออนไลน์ ครองอันดับในใจคนไทย</span>
        <p>
          บาคาร่า คาสิโนออนไลน์ ที่ดีที่สุด เพื่อประสบการณ์ที่ดีของผู้เล่นอย่างแท้จริง
        </p>
        <div class="bot_img">
          <div class="image">
            <img src="../assets/icon0103.jpg" />
            <span>Security</span>
          </div>
          <div class="image">
            <img src="../assets/icon0204.jpg" />
            <span>Automatic</span>
          </div>
          <div class="image">
            <img src="../assets/icon0417.jpg" />
            <span>Service 24/7</span>
          </div>
        </div>
      </div>
      <div class="tag">
        <span>Tags</span>
        <div class="name_tag">
          <button>บาคาร่า</button>
          <button>คาสิโนออนไลน์</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>คาสิโนออนไลน์</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>allbet</button>
          <button>casino</button>
          <button>บาคาร่า</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>คาสิโนออนไลน์</button>
          <button>allbet</button>
          <button>allbet</button>
          <button>คาสิโนออนไลน์</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>allbet</button>
          <button>casino</button>
          <button>sexy gaming</button>
          <button>คาสิโนออนไลน์</button>
          <button>allbet</button>
          <button>คาสิโนออนไลน์</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>allbet</button>
          <button>casino</button>
          <button>บาคาร่า</button>
          <button>คาสิโนออนไลน์</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>casino</button>
          <button>dg casino</button>
          <button>lavaplay</button>
          <button>บาคาร่า</button>
          <button>คาสิโนออนไลน์</button>
          <button>เสือ มังกร</button>
          <button>sexy gaming</button>
          <button>allbet</button>
          <button>casino</button>
          <button>dg casino</button>
          <button>lavaplay</button>
        </div>
      </div>
      <div class="right">
        <span>Partnerships</span>
        <div class="icon">
          <img src="../assets/icon0106.jpg" />
          <img src="../assets/icon0201.jpg" />
          <img src="../assets/icon0407.jpg" />
          <img src="../assets/icon0103.jpg" />
          <img src="../assets/icon0122.jpg" />
          <img src="../assets/icon0204.jpg" />
          <img src="../assets/icon0301.jpg" />
        </div>
        <span>Payment Accepted</span>
        <div class="icon">
          <img src="../assets/icon0418.jpg" />
          <img src="../assets/icon0306.jpg" />
          <img src="../assets/icon0407.jpg" />
          <img src="../assets/icon0412.jpg" />
          <img src="../assets/icon0413.jpg" />
          <img src="../assets/icon0414.jpg" />
          <img src="../assets/icon0416.jpg" />
          <img src="../assets/icon0417.jpg" />
          <img src="../assets/icon0407.jpg" />
          <img src="../assets/icon0421.jpg" />
          <img src="../assets/icon0106.jpg" />
          <img src="../assets/icon0201.jpg" />
        </div>
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
  padding: 5px 8px 3px 8px;
  height: 50px;
  background: #1d1d1d;
}
.footer .row {
  text-align: left;
  /*position: relative;
  top: 50%;
  transform: translateY(-50%);*/
  display: grid;
  grid-template-columns: 3fr 9fr 3fr;
  font-size: 3px;
  margin: 0px;
}
.footer .row span {
  color: #f7c632;
}
.footer .tag {
  margin-left: 5px;
}
.footer button {
  font-size: 3px;
  color: #fff;
  background: #464646;
  padding: 0px 3px;
  margin: 1px 2px 1px 0px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Kanit", Arial, sans-serif;
}
.icon img {
  width: 7px;
  margin-right: 1px;
  border-radius: 2px;
}
.icon {
  margin: 3px 0px;
}
.bot_img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.bot_img .image {
  border: 1px solid #ffffff61;
  border-radius: 3px;
  height: 25px;
  margin-right: 1px;
}
.bot_img img {
  width: 10px;
  margin-top: 5px;
}
</style>
