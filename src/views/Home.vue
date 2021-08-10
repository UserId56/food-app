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
    <me-craft />
  </div>
</template>

<script>
// @ is an alias to /src
import craft from "@/components/craft.vue";

export default {
  name: "Home",
  components: {
    "me-craft": craft,
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
}
</style>
