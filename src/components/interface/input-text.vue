<template>
  <div class="input-component-text">
    <input :type="type" :placeholder="title" v-model.trim="valueInput" />
  </div>
</template>

<script>
export default {
  model: {
    event: "value-input-text",
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      valueInput: "",
    };
  },
  watch: {
    valueInput() {
      this.$emit("value-input-text", this.valueInput);
    },
  },
};
</script>

<style lang="scss">
.input-component-text {
  input {
    background: #fbfbfc;
    border: 1px solid #eeebeb;
    box-sizing: border-box;
    border-radius: 35px;
    padding: 18px;
    width: 100%;
    outline: none;
    &::placeholder {
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    &:focus::placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]:hover,
  input[type="number"]:focus {
    -moz-appearance: number-input;
  }
}
</style>