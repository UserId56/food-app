<template>
  <div class="banner-list">
    <div
      class="banner-list_first-element"
      v-for="element of bannerList"
      :key="element.product.id"
      :class="{
        'show-element': element.id == 1,
        'no-show-element': element.id != 1,
      }"
      @mouseover="stopBannerPlay"
      @mouseout="playBannerPlay"
      @click="corusel"
    >
      <span class="title-banner" v-text="element.bannerTitle"></span>
      <iten-food :itemFood="element.product" :itsBanner="true"></iten-food>
    </div>
    <div class="banner-list_back-element"></div>
  </div>
</template>

<script>
import Banner from "@/helpers/ModelBanner.js";
import itemFood from "@/components/itemFood.vue";
export default {
  components: {
    "iten-food": itemFood,
  },
  created() {
    let tempBanner;
    let banerIndex = 1;
    for (
      let i = 0;
      i < this.$store.state.products.length && banerIndex <= 3;
      i++
    ) {
      if (this.$store.state.products[i].bannerId != null) {
        this.$store.state.bannerId.forEach((element) => {
          if (element.id == this.$store.state.products[i].bannerId) {
            tempBanner = new Banner(
              banerIndex++,
              element,
              this.$store.state.products[i]
            );
            this.bannerList.push(tempBanner);
          }
        });
      }
    }
  },
  data() {
    return {
      bannerList: [],
      bannerPlay: true,
    };
  },
  methods: {
    stopBannerPlay() {
      this.bannerPlay = false;
    },
    playBannerPlay() {
      this.bannerPlay = true;
    },
    corusel(ev) {
      if (ev) {
        this.bannerPlay = true;
      }
      if (this.bannerPlay) {
        this.bannerList.forEach((el) => {
          if (el.id == 1) {
            el.id = 3;
          } else {
            el.id = el.id - 1;
          }
        });
        if (ev) {
          this.bannerPlay = false;
        }
      } else return;
    },
  },
  mounted() {
    setInterval(() => this.corusel(), 5000);
  },
};
</script>

<style lang="scss">
@mixin wmax {
  width: 70vw;
  max-width: 1344px;
}
.banner-list {
  position: relative;
  @include wmax;
  height: 568px;
  margin: 0 auto;
  .banner-list_first-element {
    position: absolute;
    background-color: #bde098;
    background-image: url(../assets/img/interface/bannerB.png);
    background-repeat: no-repeat;
    padding: 32px 101px 0;
    @include wmax;
    height: 513px;
    border: 2.5px solid #bde098;
    box-sizing: border-box;
    border-radius: 10px;
    transform: translateY(54px) translateX(33px);
    transition: transform 0.5s;
    .title-banner {
      display: block;
      text-align: center;
      font-size: 32px;
      line-height: 38px;
    }
  }
  .show-element {
    z-index: 1;
    transition: transform 0.5s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: slidershow;
  }
  .no-show-element {
    z-index: -1;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: sliderhid;
  }
  .banner-list_back-element {
    position: absolute;
    transform: translateY(54px) translateX(33px);
    @include wmax;
    height: 513px;
    background: #e0f2cc;
    border-radius: 10px;
    z-index: 0;
  }
  @keyframes slidershow {
    from {
      transform: translateY(54px) translateX(33px);
    }
    50% {
      transform: translateY(54px) translateX(0);
    }
    to {
      transform: translateY(0) translateX(0);
    }
  }
  @keyframes sliderhid {
    from {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(0) translateX(33px);
    }
    to {
      transform: translateY(54px) translateX(33px);
    }
  }
  @keyframes slidershow-mobi {
    from {
      transform: translateY(20px) translateX(33px);
    }
    50% {
      transform: translateY(20px) translateX(0);
    }
    to {
      transform: translateY(0) translateX(0);
    }
  }
  @keyframes sliderhid-mobi {
    from {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(0) translateX(33px);
    }
    to {
      transform: translateY(20px) translateX(33px);
    }
  }
}
@media (max-width: 1024px) {
  .banner-list {
    .banner-list_first-element {
      height: 432px;
    }
    .banner-list_back-element {
      height: 432px;
    }
  }
}
@media (max-width: 768px) {
  .banner-list {
    height: 395px;
    .banner-list_first-element {
      height: 323px;
      padding: 25px 30px 0;
      .title-banner {
        font-size: 27px;
        line-height: 32px;
      }
    }
    .banner-list_back-element {
      height: 323px;
    }
  }
}
@media (max-width: 375px) {
  .banner-list {
    width: 100%;
    height: 247px;
    .banner-list_back-element {
      height: 226px;
      width: 90%;
      transform: translateY(20px) translateX(33px);
    }
    .banner-list_first-element {
      height: 226px;
      width: 90%;
      padding: 18px 7px 0;
      background-size: cover;
      transform: translateY(20px) translateX(33px);
      .title-banner {
        font-size: 20px;
        line-height: 25px;
      }
    }
    .show-element {
      animation-name: slidershow-mobi;
    }
    .no-show-element {
      animation-name: sliderhid-mobi;
    }
  }
}
</style>