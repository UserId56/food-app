<template>
  <div class="all-info-container">
    <div class="modal-info">
      <div class="exit" @click="closeModal"></div>
      <card-food-info />
    </div>
  </div>
</template>

<script>
import cardFoodInfo from "./cardFoodInfo.vue";
export default {
  components: {
    "card-food-info": cardFoodInfo,
  },
  methods: {
    closeModal() {
      this.$store.commit("closeModal");
      console.log("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.all-info-container {
  .exit {
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    background-image: url(../assets/img/interface/exit.png);
  }
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(51, 49, 49, 0.85);
  text-align: center;
  .modal-info {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background: #ffffff;
    border-radius: 10px;
    width: 80%;
    max-width: 1523px;
  }
}
.all-info-container::after {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  content: "";
}
</style>