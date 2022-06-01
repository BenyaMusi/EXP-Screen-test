<template>
  <div class="landing">
    <div
      class="slider-shape"
      id="slider"
      @mouseenter="stopSlider"
      @mouseleave="startSlider"
    >
      <transition-group :name="direction ? 'slide-leave' : 'slide-enter'">
        <img
          class="image"
          v-for="number in [sliderIndex]"
          v-bind:key="number"
          :src="sliderImages[Math.abs(sliderIndex) % sliderImages.length]"
        />
      </transition-group>
    </div>
    <div class="slider-nav">
      <span
        class="circle"
        v-for="(img, index) in sliderImages"
        v-bind:key="index"
        :class="[sliderIndex === index ? 'active' : '']"
        @click="sliderMap(index)"
        ><span></span
      ></span>
    </div>
    <p class="top_line">คาสิโนออนไลน์เต็มรูปแบบ ตื่นตาตื่นใจไปกับทุกการเดิมพัน</p>
    <div class="all_menu">
      <div class="menu">
        <img src="../assets/bungou1.jpg" />
        สุ่มเกม
      </div>
      <div class="menu">
        <img src="../assets/bungou2.jpg" />
        BBIN Casino
      </div>
      <div class="menu">
        <img src="../assets/bungou3.jpg" />
        WE
      </div>
      <div class="menu">
        <img src="../assets/bungou4.jpg" />
        AE Sexy
      </div>
      <div class="menu">
        <img src="../assets/bungou5.jpg" />
        ALLBet
      </div>
      <div class="menu">
        <img src="../assets/bungou6.jpg" />
        Micro Gaming Plus
      </div>
      <div class="menu">
        <img src="../assets/bungou7.jpg" />
        PragmaticPlay Live
      </div>
      <div class="menu">
        <img src="../assets/bungou8.jpg" />
        PlayTech Live
      </div>
      <div class="menu">
        <img src="../assets/bungou9.jpg" />
        Evolution Gaming
      </div>
      <div class="menu">
        <img src="../assets/bungou10.jpg" />
        Entwine
      </div>
      <div class="menu">
        <img src="../assets/bungou11.jpg" />
        N2 Live
      </div>
      <div class="menu">
        <img src="../assets/bungou12.jpg" />
        Xtreme Gaming
      </div>
      <div class="menu">
        <img src="../assets/bungou13.jpg" />
        WM Casino
      </div>
      <div class="menu">
        <img src="../assets/bungou14.jpg" />
        Big Gaming
      </div>
      <div class="menu">
        <img src="../assets/bungou15.jpg" />
        SA Gaming
      </div>
      <div class="menu">
        <img src="../assets/bungou16.jpg" />
        Dream Gaming
      </div>
      <div class="menu">
        <img src="../assets/bungou17.jpg" />
        Prwtty Gaming
      </div>
      <div class="menu">
        <img src="../assets/bungou18.jpg" />
        Asia Gaming
      </div>
    </div>
    <div class="bill">
      <div class="bill_head">
        <img src="../assets/anya06.png" />
        <span>บิลถอนล่าสุด</span>
      </div>
      <div class="profile">
        <div class="profile_top">
          <img :src="Profile[0].Img" />
          <div class="info">
            <div class="profile_id">{{ Profile[0].ID }}</div>
            <div class="time">เวลาที่ถอน {{ Profile[0].Time }} นาที</div>
          </div>
        </div>
        <div class="money">
          <img src="../assets/anya06.png" />
          <span>{{ Profile[0].Money }}</span>
        </div>
      </div>
      <div class="profile">
        <div class="profile_top">
          <img :src="Profile[1].Img" />
          <div class="info">
            <div class="profile_id">{{ Profile[1].ID }}</div>
            <div class="time">เวลาที่ถอน {{ Profile[1].Time }} นาที</div>
          </div>
        </div>
        <div class="money">
          <img src="../assets/anya06.png" />
          <span>{{ Profile[1].Money }}</span>
        </div>
      </div>
      <div class="profile">
        <div class="profile_top">
          <img :src="Profile[2].Img" />
          <div class="info">
            <div class="profile_id">{{ Profile[2].ID }}</div>
            <div class="time">เวลาที่ถอน {{ Profile[2].Time }} นาที</div>
          </div>
        </div>
        <div class="money">
          <img src="../assets/anya06.png" />
          <span>{{ Profile[2].Money }}</span>
        </div>
      </div>
      <div class="profile">
        <div class="profile_top">
          <img :src="Profile[3].Img" />
          <div class="info">
            <div class="profile_id">{{ Profile[3].ID }}</div>
            <div class="time">เวลาที่ถอน {{ Profile[3].Time }} นาที</div>
          </div>
        </div>
        <div class="money">
          <img src="../assets/anya06.png" />
          <span>{{ Profile[3].Money }}</span>
        </div>
      </div>
      <div class="profile">
        <div class="profile_top">
          <img :src="Profile[4].Img" />
          <div class="info">
            <div class="profile_id">{{ Profile[4].ID }}</div>
            <div class="time">เวลาที่ถอน {{ Profile[4].Time }} นาที</div>
          </div>
        </div>
        <div class="money">
          <img src="../assets/anya06.png" />
          <span>{{ Profile[4].Money }}</span>
        </div>
      </div>
    </div>
    <div class="quote">
      WARP CASINO เว็บบาคาร่า อังดับ1เว็บตรง สมัครฟรีไม่เอเย่นต์ ฝากถอนอัตโนมัติ
      ไม่มีขั้นต่ำ
    </div>
    <div class="function_info">
      <img src="../assets/bungou1.jpg" />
      <div class="text">
        Sed corrupti amet qui repellendus aspernatur id quisquam laudantium ut voluptatem
        harum et commodi quia. Eum quibusdam corrupti qui voluptas beatae ea dolor eveniet
        et enim magnam est reiciendis recusandae aut deserunt molestiae! Qui doloremque
        excepturi qui dignissimos eveniet ut sint explicabo in expedita consectetur.
      </div>
    </div>
    <div class="function_info-2">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
      <img src="../assets/bungou2.jpg" />
    </div>
    <div class="quote">เกม คาสิโนสด casino ออนไลน์ ยอดฮิตบนเว็บ Warp casino</div>
    <div class="function_info">
      <img src="../assets/bungou9.jpg" />
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <div class="function_info-2">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
      <img src="../assets/bungou10.jpg" />
    </div>
    <div class="function_info">
      <img src="../assets/bungou14.jpg" />
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <div class="function_info-2">
      <div class="text">
        Et autem vero qui architecto facilis ut necessitatibus dolores et veniam voluptate
        non quidem itaque in harum maiores! Quo temporibus ducimus vel vitae magni et
        molestiae Quis aut ipsam eius.
      </div>
      <img src="../assets/bungou15.jpg" />
    </div>
    <div class="quote">เหตุผลที่ Warpcasino ครองใจผู้เล่นเอเชียมาอย่างยาวนาน</div>
    <div class="reason">
      <p>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <p>
        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <p>
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <span class="news_title">บทความคาสิโน</span>
    <div class="news">
      <p>wmbet444 เว็บคาสิโนออนไลน์ เว็บตรง จ่ายจริง ที่ดีที่สุด 2022</p>
      <p>460bet เว็บตรง ทางเข้าหลัก ไม่ต้องดาวน์โหลด ได้ทันที 2022</p>
      <p>789bet เว็บคาสิโน ออนไลน์ เว็บตรง789 ที่ดีที่สุด ในประเทศ</p>
      <p>lavaplay 88 เว็บเกม คาสิโนออนไลน์ ที่ใหญ่และดีที่สุด</p>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from "@/components/Footer.vue";
export default {
  data() {
    return {
      carouselTimer: null,
      Profile: [
        {
          Img: require("../assets/01.png"),
          ID: "093012 xxxx",
          Time: "3:19",
          Money: "200",
        },
        {
          Img: require("../assets/03.png"),
          ID: "099269 xxxx",
          Time: "2:18",
          Money: "1821",
        },
        {
          Img: require("../assets/05.png"),
          ID: "099269 xxxx",
          Time: "2:13",
          Money: "2605",
        },
        {
          Img: require("../assets/03.png"),
          ID: "080461 xxxx",
          Time: "3:19",
          Money: "300",
        },
        {
          Img: require("../assets/01.png"),
          ID: "093012 xxxx",
          Time: "2:20",
          Money: "300",
        },
      ],
      sliderImages: [
        require("../assets/Paradoxlive2.jpg"),
        require("../assets/bungou.png"),
        require("../assets/juju2.jpg"),
      ],
      //slider index
      sliderIndex: 0,

      // for image animation
      direction: true,
    };
  },
  components: {
    FooterPage,
  },
  created() {
    // auto plat at page load
    this.startSlider();
  },
  methods: {
    startSlider() {
      // set interval for auto play
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000);
    },
    stopSlider() {
      clearInterval(this.intervalId);
    },
    next() {
      this.sliderIndex++;
      this.sliderIndex > this.sliderImages.length - 1 ? (this.sliderIndex = 0) : "";
      this.direction = false;
    },
    prev() {
      this.sliderIndex--;
      this.sliderIndex < 0 ? (this.sliderIndex = this.sliderImages.length - 1) : "";
      this.direction = true;
    },
    sliderMap(index) {
      if (this.sliderIndex <= index) {
        this.direction = false;
      } else {
        this.direction = true;
      }
      this.sliderIndex = index;
    },
  },
};
</script>

<style>
.slider-shape {
  z-index: 1;
  position: relative;
  width: 1250px;
  height: 450px;
  cursor: pointer;
}
.circle {
  display: inline-flex;
  position: relative;
  top: -10px;
  left: 45%;
  width: 6px;
  height: 1px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 200ms ease;
  margin: 0px 2px;
}
.circle.active {
  opacity: 1;
}
.image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.landing .image,
.landing .slider-shape {
  width: 100%;
  height: 85px;
  object-fit: cover;
}

.landing {
  overflow: auto;
  background: #09091d;
  background-size: 100%;
  opacity: 0.9;
}
.landing::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f567;
}
.landing::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f567;
}
.landing::-webkit-scrollbar-thumb {
  background-color: #302d6a;
}
.landing .top_line {
  font-size: 5px;
  text-align: center;
  margin: 0px;
  position: relative;
  top: -8px;
}
.all_menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 4px;
  padding: 0px 45px;
}
.menu {
  cursor: pointer;
  text-align: left;
}
.menu img {
  display: block;
  width: 50px;
  margin: 3px 0px;
}
.bill {
  display: grid;
  grid-template-columns: 10fr 9fr 9fr 9fr 9fr 9fr;
  height: 25px;
  padding: 0px 10px;
  margin: 15px 0px;
}
.bill_head img {
  width: 20px;
  float: left;
  margin: 2px 3px;
}
.bill_head {
  display: inline;
  padding: 1px 0px;
  font-size: 8px;
  color: rgb(246, 223, 54);
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgba(0, 72, 170, 1) 25%,
    rgba(115, 193, 212, 1) 50%,
    rgba(0, 72, 170, 1) 75%
  );
  border-radius: 3px;
}
.profile {
  margin: 1px 2px;
  padding: 2px;
  background: linear-gradient(0deg, rgba(0, 72, 170, 1) 48%, rgba(98, 173, 255, 1) 100%);
  border-radius: 4px;
}
.profile img {
  width: 8px;
}
.profile_top,
.money {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.profile_id {
  font-size: 4px;
  color: rgb(246, 223, 54);
}
.profile .time {
  font-size: 3px;
}
.money {
  margin: 1px 3px 0px 3px;
  padding: 1px 4px;
  background: #0a274f;
  border-radius: 4px;
  align-items: center;
}
.money img {
  width: 6px;
}
.money span {
  font-size: 4px;
  font-weight: bold;
  color: rgb(246, 223, 54);
}
.money span,
.info {
  text-align: right;
}
.quote {
  background: radial-gradient(circle, rgb(34, 60, 103) 0%, rgba(2, 12, 48, 1) 29%);
  border: 1px solid rgb(229, 184, 61);
  color: rgb(229, 184, 61);
  border-radius: 5px;
  font-weight: bold;
  font-size: 5px;
  margin: 10px 45px;
  text-align: center;
  padding: 3px 0px;
}
.function_info,
.function_info-2 {
  margin: 0px 55px;
  font-size: 3px;
  display: flex;
  align-items: center;
  vertical-align: middle;
}
.function_info img,
.function_info-2 img {
  width: 55px;
  margin: 5px 0px;
}
.function_info .text {
  margin-left: 15px;
}
.function_info-2 .text {
  margin-right: 15px;
}
.reason p {
  font-size: 3px;
  margin: 5px 65px;
}
.news_title,
.news {
  margin: 0px 40px;
}
.news_title {
  font-size: 5px;
  border-style: none none none solid;
  border-color: rgb(229, 184, 61);
  padding-left: 3px;
}
.news {
  font-size: 3px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.news p {
  margin: 1px 1px 10px 1px;
  padding: 4px 2px;
  background: rgb(29, 90, 169);
  border: 1px solid rgb(229, 184, 61);
  border-radius: 3px;
}
</style>
