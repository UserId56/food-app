<template>
  <div class="food-list__item">
    <div class="food-img">
      <img :src="itemFood.img" :alt="itemFood.title" />
    </div>
    <span class="item-title" v-text="itemFood.title"></span>
    <span class="food-weight" v-text="itemFood.weight + ' гр'"></span>
    <div class="food-price" v-text="itemFood.price"></div>
  </div>
</template>

<script>
export default {
  props: {
    itemFood: {
      type: Object,
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
  width: 357px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  margin-bottom: 20px;
  .food-img {
    width: 365px;
    height: 365px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
    padding: 11px 55px;
    background: #eae9e9;
    border-radius: 35px;
    margin: 0 0 28px;
  }
}
.food-list__item:not(:first-child):not(:last-child) {
  margin: 0 20px 20px;
}
</style>