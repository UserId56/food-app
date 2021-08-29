<template>
  <div class="cart">
    <div class="icon">
      <img src="../assets/img/interface/cart.svg" alt="" />
      <div class="count" v-text="count" v-show="count != 0"></div>
    </div>
    <span class="cart-title">Корзина</span>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.cart {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 52px 0 0;
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
}
</style>
