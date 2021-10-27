<template>
  <div class="input-number">
    <div class="minus-button" @click="minusValue"><span>-</span></div>
    <div class="value-viewer"><span v-text="valueInput"></span></div>
    <div class="plus-button" @click="plusValue"><span>+</span></div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "valueNumber",
    event: "value-input-number",
  },
  props: {
    valueNumber: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      valueInput: this.$props.valueNumber,
    };
  },
  methods: {
    minusValue() {
      this.valueInput = this.valueInput > 0 ? this.valueInput - 1 : 0;
      this.$emit("value-input-number", this.valueInput);
    },
    plusValue() {
      this.valueInput += 1;
      this.$emit("value-input-number", this.valueInput);
    },
  },
};
</script>

<style lang="scss">
.input-number {
  display: flex;
  background: #eae9e9;
  border-radius: 35px;
  box-sizing: border-box;
  width: 189px;
  font-weight: 600;
  height: 46px;
  text-align: center;
  justify-content: space-evenly;
  position: relative;
}
.plus-button,
.minus-button {
  cursor: pointer;
}
.plus-button,
.minus-button,
.value-viewer {
  user-select: none;
  display: flex;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 36px;
    line-height: 41px;
  }
}
@media (max-width: 1024px) {
  .input-number {
    width: 174px;
    span {
      font-size: 27px;
      line-height: 32px;
    }
  }
}
</style>