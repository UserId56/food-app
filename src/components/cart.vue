<template>
  <div class="cart" @click="openCart">
    <div class="head-cart-view">
      <div class="icon">
        <img src="../assets/img/interface/cart.svg" alt="" />
        <div class="count" v-text="count" v-show="count != 0"></div>
      </div>
      <span class="cart-title">Корзина</span>
    </div>
    <div class="cart-block" v-if="showCart" @click.stop="closeModal">
      <div class="cart-block-container" @click.stop>
        <template v-if="!showConfirm">
          <div class="exit" @click.stop="closeModal"></div>
          <div class="head-cart">
            <span class="head-cart__title">Корзина</span>
            <span class="head-cart__clear" @click.stop="clearCart"
              >Очистить</span
            >
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
            <div class="cart-items-container">
              <card-food-info
                v-for="cartItem of cartItems"
                :key="cartItem.id"
                :itsCart="true"
                :getItemCart="cartItem"
              />
            </div>
            <div class="line-hr"></div>
            <div class="sum-cart">
              <span class="sum-cart__title">Сумма заказа:</span>
              <span class="sum-cart__sum-all" v-text="sumAll"></span>
            </div>
            <div class="line-hr"></div>
            <div class="button-by" @click="openConfirm">
              <span>Оформить ></span>
            </div>
          </div>
          <div class="cart-no-items" v-else>
            <span class="cart-no-items__title">В корзине ни чего нет</span>
          </div>
        </template>
        <confirm-order v-else @back-cart="backCart" />
      </div>
    </div>
  </div>
</template>

<script>
import cardFoodInfo from "@/components/cardFoodInfo.vue";
import confirmOrder from "@/components/confirm.vue";
export default {
  components: {
    "card-food-info": cardFoodInfo,
    "confirm-order": confirmOrder,
  },
  provide() {
    return {
      closeModalCart: this.closeModalCart,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getItemsFoodCart;
    },
    count() {
      return this.$store.state.cart.products.length;
    },
    sumAll() {
      return this.cartItems.reduce((sum, el) => {
        let sumEl = el.price * el.count;
        return sum + sumEl;
      }, 0);
    },
  },
  data() {
    return {
      showCart: false,
      showConfirm: false,
    };
  },
  methods: {
    openCart() {
      this.showCart = true;
    },
    closeModal() {
      this.showCart = false;
    },
    clearCart() {
      this.$store.commit("clearAllCart");
    },
    backCart() {
      this.showConfirm = false;
    },
    openConfirm() {
      this.showConfirm = true;
    },
    closeModalCart() {
      this.showCart = false;
      console.log(this);
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
    backdrop-filter: blur(10px);
    background: rgb(51 49 49 / 37%);
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
      padding: 28px 35px 51px 35px;
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
          cursor: pointer;
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
        margin: 27px 0;
      }
      .full-complate {
        display: flex;
        padding: 10px 15px;
        width: 100%;
        background: #bde098;
        border-radius: 10px;
        box-sizing: border-box;
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
        .sum-cart {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          line-height: 24px;
          .sum-cart__title {
            font-weight: 500;
          }
          .sum-cart__sum-all {
            font-weight: 600;
          }
        }
        .button-by {
          cursor: pointer;
          background: #bde098;
          border-radius: 35px;
          width: 189px;
          height: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 20px;
            line-height: 24px;
          }
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