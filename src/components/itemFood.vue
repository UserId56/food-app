<template>
  <div
    :class="{
      'food-list__item': !itsBanner,
      'banner-list__item': itsBanner,
    }"
    @click="openInfo"
  >
    <div
      :class="{
        'food-img': !itsBanner,
        'banner-food-img': itsBanner,
      }"
    >
      <img :src="itemFood.img" :alt="itemFood.title" />
    </div>
    <div class="food-info">
      <span class="item-title" v-text="itemFood.title"></span>
      <span class="food-weight" v-text="itemFood.weight + ' гр'"></span>
      <div
        class="food-price"
        v-text="itemFood.price + 'р'"
        @click.stop="openInfo('open')"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemFood: {
      type: Object,
    },
    itsBanner: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openInfo(openinBanner) {
      if (this.$props.itsBanner && openinBanner != "open") {
      } else {
        this.$store.commit("openInfo", this.itemFood.id);
      }
    },
  },
};
</script>

<style lang="scss">
.food-list__item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  margin: 0 10px 20px;
  .food-img {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  .food-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item-title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
    .food-weight {
      margin: 32px 0 20px;
      font-size: 17px;
      line-height: 20px;
      color: #757575;
    }
    .food-price {
      user-select: none;
      padding: 11px 55px;
      background: #eae9e9;
      border-radius: 35px;
      margin: 0 0 28px;
    }
  }
}
.banner-list__item {
  user-select: none;
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0;
  .food-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;

    .item-title {
      font-weight: 600;
      font-size: 32px;
      line-height: 38px;
    }
    .food-weight {
      margin: 32px 0 20px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #000;
    }
    .food-price {
      user-select: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      padding: 11px 55px;
      background: #448f55;
      border-radius: 35px;
      margin: 0 0 28px;
    }
  }
}
@media (max-width: 1024px) {
  .food-list__item {
    width: 22%;
    .food-img {
      img {
        width: 140px;
      }
    }
    .food-info {
      .item-title {
        font-size: 15px;
        line-height: 22px;
        text-align: center;
      }
    }
  }
  .banner-list__item {
    margin: 45px 0 0;
    .banner-food-img {
      img {
        width: 240px;
      }
    }
    .food-info {
      .item-title {
        font-size: 25px;
        line-height: 29px;
        text-align: center;
      }
    }
  }
}
@media (max-width: 768px) {
  .food-list__item {
    width: 37vw;
    .food-img {
      img {
        width: 188px;
      }
    }
  }
  .banner-list__item {
    margin: 15px 0 0;
    .food-info {
      .item-title {
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
}
@media (max-width: 375px) {
  .food-list__item {
    width: 163px;
    .food-img {
      img {
        width: 149px;
      }
    }
    &:nth-child(2n + 1) {
      margin: 0 0 20px;
    }
    &:nth-child(2n) {
      margin: 0 0 20px 7px;
    }
    .food-info {
      .item-title {
        width: 155px;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        line-height: 1.3em;
        height: 1.2em;
      }
      .food-price {
        padding: 11px 42px;
      }
    }
  }
  .banner-list__item {
    margin: 8px 0 0;
    .banner-food-img {
      img {
        width: 149px;
      }
    }
    .food-info {
      width: 45%;
      .item-title {
        font-size: 15px;
        line-height: 21px;
        margin-top: 17px;
      }
      .food-weight {
        margin: 10px 0;
        font-size: 15px;
        line-height: 20px;
      }
      .food-price {
        padding: 8px 25px;
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
}
</style>