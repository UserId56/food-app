<template>
  <div id="app">
    <div class="content-container">
      <header-app />
      <router-view />
    </div>
    <footer class="footer-site">
      <div class="footer-container">
        <router-link to="/"
          ><img src="@/assets/img/interface/CO_Logo_black.png" alt="logo"
        /></router-link>
        <popup-info v-if="$store.state.showModalInfo" />
        <div class="foter-contact">
          <span>+7 (985) 000-00-00</span>
          <span>food_test@mail.ru</span>
        </div>
        <div class="right-block">
          <router-link to="/UA" class="user-conditions" target="_blank"
            >Пользовательское соглашение</router-link
          >
          <span class="footer-year">&#169;&nbsp; 2021</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import header from "@/components/header.vue";
import popupInfo from "@/components/popupInfo.vue";
export default {
  name: "App",
  components: {
    "header-app": header,
    "popup-info": popupInfo,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600&display=swap");
body {
  background: #fafafa;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
@mixin df-jcsb {
  display: flex;
  justify-content: space-between;
}
@mixin fs-lh-c($color: #777875) {
  font-size: 15px;
  line-height: 21px;
  color: $color;
}
#app {
  font-family: "Comfortaa";
  font-weight: 500;
  .content-container {
    width: 80%;
    margin: 0 auto;
    max-width: 1523px;
  }
  .footer-site {
    margin-top: 64px;
    background: #20241c;
    padding: 25px 0;
    .footer-container {
      width: 80%;
      max-width: 1523px;
      margin: 0 auto;
      @include df-jcsb;
      align-items: center;
      .foter-contact {
        @include df-jcsb;
        width: 32%;
        span {
          font-weight: 500;
          @include fs-lh-c(#fff);
        }
      }
      .right-block {
        width: 400px;
        @include df-jcsb;
        align-items: center;
        .user-conditions {
          text-decoration: none;
          @include fs-lh-c;
          text-decoration-line: underline;
        }
        .footer-year {
          @include fs-lh-c;
        }
      }
    }
  }
}
</style>
