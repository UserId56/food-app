<template>
  <div id="app">
    <div class="content-container">
      <header-app />
      <router-view />
    </div>
    <footer-app />
    <popup-info v-if="$store.state.showModalInfo" />
  </div>
</template>
<script>
import header from "@/components/header.vue";
import popupInfo from "@/components/popupInfo.vue";
import footer from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    "header-app": header,
    "popup-info": popupInfo,
    "footer-app": footer,
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
    max-width: 1920px;
    margin: 0 auto;
    margin-top: 64px;
    background: #20241c;
    padding: 25px 0;
    .footer-container {
      width: 80%;
      max-width: 1523px;
      margin: 0 auto;
      @include df-jcsb;
      align-items: center;
      .footer-contact {
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
@media (max-width: 1024px) {
  #app {
    .footer-site {
      .footer-container {
        a > img {
          width: 130px;
        }
        .foter-contact {
          span {
            font-size: 13px;
            line-height: 17px;
          }
        }
        .right-block {
          width: 362px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  #app {
    .footer-site {
      .footer-container {
        flex-direction: column;
        .footer-contact {
          flex-direction: column;
          width: auto;
          height: 60px;
          justify-content: space-around;
          align-items: center;
        }
        .right-block {
          margin-top: 5px;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 375px) {
  #app {
    .content-container {
      width: 90%;
    }
  }
}
</style>
