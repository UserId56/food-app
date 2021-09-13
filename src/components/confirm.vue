<template>
  <div class="confirm-order">
    <template v-if="!showOrder">
      <div class="back-button" @click="backCart"></div>
      <span class="confirm-title">Оформить заказ</span>
      <form @submit.prevent="sendOrder">
        <input-text @value-input-text="editValueName" title="Имя" />
        <input-text
          @value-input-text="editValuePhone"
          title="Телефон"
          type="number"
        />
        <button class="confirm-button" :disabled="!validForm">Оформить</button>
      </form>
    </template>
    <div class="order" v-else>
      <div class="check-order"></div>
      <span class="order-complite">Заказ успешно офрмлен!</span>
      <div class="order-number-container">
        <span class="order-number-text">Номер вашего заказа</span>
        <span class="order-number" v-text="'#' + orderNumber"></span>
      </div>
      <div @click="closeCart" class="action-block__add-button">На главную</div>
    </div>
  </div>
</template>

<script>
import inputText from "./interface/input-text.vue";
export default {
  components: {
    "input-text": inputText,
  },
  inject: ["closeModalCart"],
  data() {
    return {
      valueName: "",
      valuePhone: "",
      showOrder: false,
      orderNumber: "Ошибка",
    };
  },
  computed: {
    validForm() {
      //здесь делать валидатор формы
      return this.valueName.length > 0 && this.valuePhone.length > 10
        ? true
        : false;
    },
  },
  methods: {
    editValueName(value) {
      this.valueName = value;
    },
    editValuePhone(value) {
      this.valuePhone = value;
    },
    backCart() {
      this.$emit("back-cart");
    },
    sendOrder() {
      this.showOrder = true;
      // Отправка данных на серв, получение и при удаче некст код
      this.valueName = "";
      this.ValuePhone = "";
      this.$store.commit("clearAllCart");
      this.orderNumber = 765;
    },
    closeCart() {
      this.closeModalCart();
    },
  },
};
</script>

<style lang="scss">
.confirm-order {
  text-align: left;
  height: 80%;
  .back-button {
    width: 41px;
    height: 41px;
    background: #ffffff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      border: 1.5px solid #000000;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(135deg);
    }
  }
  .confirm-title {
    margin: 39px 0 47px;
    display: inline-block;
    font-weight: 600;
    font-size: 35px;
    line-height: 42px;
  }
  input {
    margin: 10px 0;
  }
  .confirm-button {
    margin-top: 24px;
    cursor: pointer;
    background: #bde098;
    border-radius: 35px;
    user-select: none;
    padding: 11px 0;
    width: 189px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    border: none;
    &:disabled {
      background: #c3c5c1;
    }
  }
  .order {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-evenly;
    .check-order {
      width: 60px;
      height: 60px;
      background: #ffffff;
      box-shadow: 5px 7px 32px rgba(174, 217, 128, 0.45);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: "";
        border: 1.5px solid #add285;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px 3px 15px 3px;
        transform: rotate(44deg);
      }
    }
    .order-complite {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
    .order-number-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .order-number-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
      }
      .order-number {
        margin-top: 11px;
        font-weight: 500;
        font-size: 35px;
        line-height: 41px;
      }
    }
    .action-block__add-button {
      cursor: pointer;
      background: #bde098;
      border-radius: 35px;
      user-select: none;
      padding: 11px 0;
      height: 24px;
      width: 189px;
      text-align: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #000;
    }
  }
}
</style>