<template>
  <div class="cart" @click="openCart">
    <div class="head-cart-view">
      <div class="icon">
        <img src="../assets/img/interface/cart.svg" alt="" />
        <div class="count" v-text="count" v-show="count != 0"></div>
      </div>
      <span class="cart-title">Корзина</span>
    </div>
    <div class="cart-block" v-if="showCart">
      <div class="cart-block-container">
        <div class="exit" @click.stop="closeModal"></div>
        <div class="head-cart">
          <span class="head-cart__title">Корзина</span>
          <span class="head-cart__clear">Очистить</span>
        </div>
        <div class="line-hr"></div>
        <div class="full-complate">
          <div class="full-complate__icon">
            <img src="../assets/img/interface/clock.png" alt="clock" />
          </div>
          <span class="full-complate__text"
            >Действует только предзаказ. <br />
            Приходи и забирай.</span
          >
        </div>
        <div class="cart-items" v-if="cartItems.length != 0">
          <span class="cart-items__title">Приготовим для вас </span>
        </div>
        <div class="cart-no-items" v-else>
          <span class="cart-no-items__title">В корзине ни чего нет</span>
        </div>
        <div class="cart-items-container">
          <card-food-info
            v-for="cartItem of cartItems"
            :key="cartItem.id"
            :itsCart="true"
            :getItemCart="cartItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardFoodInfo from "@/components/cardFoodInfo.vue";
export default {
  components: {
    "card-food-info": cardFoodInfo,
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters.getItemsFoodCart;
    },
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    openCart() {
      console.log("open cart");
      this.showCart = true;
    },
    closeModal() {
      console.log("close cart");
      this.showCart = false;
    },
  },
};
</script>

<style lang="scss">
.line-hr {
  border: 1px solid #e7e6e6;
  transform: rotate(-0.36deg);
}
.cart {
  .head-cart-view {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 52px 0 0;
  }
  .icon {
    position: relative;
    .count {
      position: absolute;
      top: 3px;
      right: -7px;
      width: 21px;
      height: 21px;
      background-color: #bde098;
      border-radius: 14px;
      padding: 2px;
      text-align: center;
      box-sizing: border-box;
    }
  }
  .cart-title {
    margin: 0 0 0 14px;
  }
  .cart-block {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(51, 49, 49, 0.85);
    text-align: center;
    .cart-block-container {
      .exit {
        position: absolute;
        cursor: pointer;
        top: 15px;
        right: 32px;
        width: 20px;
        height: 20px;
        background-image: url(../assets/img/interface/exit.png);
      }
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      vertical-align: middle;
      background: #ffffff;
      border-radius: 0px 0px 0px 10px;
      width: 546px;
      padding: 28px 73px 51px 35px;
      overflow-y: scroll;
      height: 600px;
      .head-cart {
        display: flex;
        align-items: center;
        .head-cart__title {
          font-weight: 600;
          font-size: 35px;
          line-height: 42px;
        }
        .head-cart__clear {
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
          position: relative;
          padding-left: 30px;
          margin-left: 40px;
        }
        .head-cart__clear::before {
          position: absolute;
          content: "";
          cursor: pointer;
          top: 0;
          left: 0;
          width: 23px;
          height: 23px;
          background-image: url(../assets/img/interface/delete.png);
        }
      }
      .line-hr {
        margin: 28px 0 23px;
      }
      .full-complate {
        display: flex;
        padding: 10px 15px;
        width: 100%;
        background: #bde098;
        border-radius: 10px;
        .full-complate__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 5px;
          width: 51px;
          height: 51px;
          img {
            width: 32px;
            height: 31px;
          }
        }
        .full-complate__text {
          text-align: left;
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          margin-left: 22px;
        }
      }
      .cart-items {
        margin-top: 41px;
        text-align: left;
        .cart-items__title {
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
        }
      }
      .cart-no-items {
        margin-top: 41px;
      }
      .cart-items-container {
        margin-top: 27px;
      }
    }
  }
}
</style>