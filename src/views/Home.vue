<template>
  <div class="home">
    <div class="home-title">
      <div class="home-title__text">
        <span class="text__up">Ешь в Москва Сити</span>
        <span class="text__down">Поке, креветки, лосось 🦐</span>
      </div>
      <div class="home-title_info-banner">
        <div class="info-banner__icon"></div>
        <span class="info-banner__text"
          >Закажи и приходи на готовое — #времяденьги</span
        >
      </div>
    </div>
    <div class="line-head"></div>
    <me-craft :typePage="'home'">
      <template v-slot:meCraft>
        <span class="filter-type__title">Мы готовим</span>
      </template>
    </me-craft>

    <banner-list />
    <div class="front-footer-line"></div>
    <div class="contact">
      <span class="contact-title">Контакты</span>
      <div class="info-block">
        <div class="info-block-adress">
          <div class="info-block-container">
            <img src="../assets/img/interface/building.png" alt="building" />
            <address class="adress-text">
              <span
                >ДЦ Москва-Сити <br />
                Пресненская наб. 8С1 (-1 этаж)</span
              >
            </address>
          </div>
          <div class="how-go" @click="openMap">Как пройти?</div>
        </div>
        <div class="info-block-work">
          <div class="info-block-container">
            <img src="../assets/img/interface/clock_work.png" alt="Time Work" />
            <span class="adress-text"
              >Работаем каждый день с 8 утра до 20 вечера. Без праздников и
              выходных.</span
            >
          </div>
          <div class="work-time" v-text="IsOpen.text"></div>
        </div>
        <div class="info-block-inst">
          <img src="../assets/img/interface/instagram.png" alt="instagram" />
          <span class="instagram-name">CO_GASTROBAR</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import craft from "@/components/craft.vue";
import banner from "@/components/banner.vue";

export default {
  name: "Home",
  components: {
    "me-craft": craft,
    "banner-list": banner,
  },
  created() {
    this.workTime();
  },
  data() {
    return {
      IsOpen: {
        work: "мы открыты",
        close: "мы закрыты",
      },
    };
  },
  methods: {
    openMap() {
      window.open("https://goo.gl/maps/2ktGdXP3mTm6LaCe8");
    },
    workTime() {
      let currentDate = new Date();
      let tempDate = {
        date: currentDate,
        hours: currentDate.getHours(),
        minutes:
          currentDate.getMinutes() < 10
            ? "0" + currentDate.getMinutes()
            : currentDate.getMinutes(),
      };
      this.IsOpen.currentTime = tempDate.hours + ":" + tempDate.minutes;
      this.IsOpen.isOpen =
        tempDate.hours > 8 && tempDate.hours < 20 ? true : false;
      this.IsOpen.text = `Сейчас ${this.IsOpen.currentTime} , ${
        this.IsOpen.isOpen ? this.IsOpen.work : this.IsOpen.close
      }`;
    },
  },
  mounted() {
    setInterval(() => this.workTime(), 300000);
  },
};
</script>
<style lang="scss">
.home {
  margin: 116px 0 0;
  .home-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .home-title__text {
      display: flex;
      flex-direction: column;
      span {
        font-style: normal;
        font-weight: 600;
        font-size: 45px;
        line-height: 66px;
      }
    }
    .home-title_info-banner {
      width: 449px;
      height: fit-content;
      background: #bde098;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 19px;
      box-sizing: border-box;
      justify-content: space-between;
      .info-banner__icon {
        width: 64px;
        height: 64px;
        background-color: #ffffff;
        border-radius: 7px;
        background-image: url(../assets/img/interface/clock.png);
        background-position: center;
        background-repeat: no-repeat;
      }
      .info-banner__text {
        width: 300px;
      }
    }
  }
  .line-head {
    width: 100%;
    margin: 44px 0 64px;
    border: 1px solid #e7e6e6;
  }
  .front-footer-line {
    margin: 70px 0 54px;
    width: 100%;
    border: 1px solid #e7e6e6;
  }
  .contact {
    width: 100%;
    .contact-title {
      font-weight: 600;
      font-size: 35px;
      line-height: 42px;
    }
    .info-block {
      display: flex;
      justify-content: space-between;
      margin-top: 69px;
      .info-block-adress,
      .info-block-work {
        .info-block-container {
          display: flex;
          align-items: center;
          .adress-text {
            margin-left: 26px;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            width: 320px;
          }
        }
        .how-go {
          margin-top: 17px;
          cursor: pointer;
          padding: 11px 0;
          text-align: center;
          background: #eae9e9;
          border-radius: 25px;
          width: 402px;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
        }
        .work-time {
          text-align: center;
          padding-left: 30px;
          margin-top: 20px;
          font-size: 18px;
          line-height: 21px;
          color: #c62727;
        }
      }
      .info-block-inst {
        display: flex;
        align-items: center;
        padding-bottom: 6%;
        .instagram-name {
          margin-left: 31px;
          font-weight: 500;
          font-size: 20px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
