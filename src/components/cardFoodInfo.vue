<template>
  <div
    class="modal-info__container"
    :class="{
      modal_cart: itsCart,
    }"
  >
    <img :src="itemFood.img" alt="itemFood.title" />
    <div class="modal-info-content">
      <div class="modal-info-content__head">
        <span class="head-title" v-text="itemFood.title"></span>
        <span
          class="head-time"
          v-text="itemFood.timeWork + ' мин.'"
          v-show="!itsCart"
        ></span>
      </div>
      <span
        class="modal-info-content__weight"
        v-text="itemFood.weight + ' гр'"
      ></span>
      <div class="line-hr" v-show="!itsCart"></div>
      <div class="modal-info-content__action-block">
        <span
          class="action-block__prcie"
          v-text="itemFood.price + ' руб.'"
        ></span>
        <div
          class="action-block__add-button"
          v-if="NoShowInput"
          @click="addValue"
        >
          Добавить
        </div>
        <input-number
          v-else
          v-model="itemFood.count"
          @value-input-number="valueNumber"
        />
      </div>
      <div class="line-hr" v-show="!itsCart"></div>
      <template v-if="!itsCart">
        <div class="modal-info-content__ingredients">
          <span class="ingredients-title">Ингредиенты</span>
          <div class="ingredients-container">
            <div
              class="ingredients-item"
              v-for="item of itemFood.ingredients"
              :key="item.id"
            >
              <img :src="item.img" alt="item.title" :title="item.title" />
            </div>
          </div>
        </div>
        <span
          class="modal-info-content__description"
          v-text="itemFood.description"
        ></span>
      </template>
    </div>
  </div>
</template>

<script>
import inputNumber from "./interface/input-number.vue";
export default {
  components: {
    "input-number": inputNumber,
  },
  props: {
    itsCart: {
      type: Boolean,
      default: false,
    },
    getItemCart: {
      type: Object,
      default: () => new Object(),
    },
  },
  data() {
    return {
      itemFood: {},
      NoShowInput: true,
    };
  },
  created() {
    if (this.$props.itsCart) {
      this.itemFood = this.$props.getItemCart;
      this.NoShowInput = false;
      return;
    }
    console.log();
    for (let element of this.$store.state.products) {
      console.log("------------------------");
      console.log("ID select = ", this.$store.state.itemselect);
      console.log("ID product = ", element.id);

      if (element.id == this.$store.state.itemselect) {
        console.log("PRODUCT TRUE");
        Object.assign(this.itemFood, element);
        console.log(this.itemFood.ingredients);
        this.itemFood.count = 0;
        for (let cartItem of this.$store.state.cart.products) {
          if (cartItem.id == this.$store.state.itemselect) {
            console.log("CART TRUE");
            this.itemFood.count = cartItem.count;
            this.NoShowInput = false;
            break;
          }
        }
        break;
      } else {
        console.log("FALSE");
      }
    }
    console.log("------------------------");
    let ingredients = [];
    this.itemFood.ingredients.forEach((element) => {
      for (let i = 0; i < this.$store.state.ingredients.length; i++) {
        if (element == this.$store.state.ingredients[i].id) {
          console.log("ing true");
          ingredients.push(this.$store.state.ingredients[i]);
          break;
        }
      }
    });
    this.itemFood.ingredients = [...ingredients];
  },
  methods: {
    addValue() {
      this.itemFood.count = 1;
      this.$store.commit("editCartItems", {
        id: this.itemFood.id,
        count: this.itemFood.count,
      });
      this.NoShowInput = false;
    },
    valueNumber(count) {
      this.itemFood.count = count;
      this.$store.commit("editCartItems", {
        id: this.itemFood.id,
        count: this.itemFood.count,
      });
      if (count == 0) {
        this.NoShowInput = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-info__container {
  img {
    width: 430px;
  }
  display: flex;
  align-items: center;
  padding: 30px;
  text-align: left;
}
.modal-info-content {
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 55%;
  margin: 0 auto;
  &__head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 22px 0 0;
    .head-title {
      font-weight: 600;
      font-size: 32px;
      line-height: 38px;
    }
  }
  &__weight {
    margin: 24px 0 70px;
    font-size: 17px;
    line-height: 20px;
    color: #757575;
  }
  .line-hr {
    width: 100%;
    border: 1px solid #eeeeee;
  }
  &__action-block {
    display: flex;
    justify-content: space-between;
    padding: 28px 0;
    .action-block__prcie {
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
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
    }
  }
  .modal-info-content__ingredients {
    margin: 32px 0 30px;
    .ingredients-title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
    .ingredients-container {
      display: flex;
      margin-top: 19px;

      .ingredients-item {
        padding: 10px;
        background: #f5f6f7;
        border-radius: 10px;
        img {
          width: 33px;
        }
        &:not(:first-child):not(:last-child):nth-child(n) {
          margin: 0 5px;
        }
        &:first-child {
          margin: 0 5px 0 0;
        }
        &:last-child {
          margin: 0 0 0 5px;
        }
      }
    }
  }
  .modal-info-content__description {
    font-size: 20px;
    line-height: 28px;
  }
}
.modal_cart {
  user-select: none;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  width: 100%;
  padding: 17px;
  margin: 12px 0;
  box-sizing: border-box;
  img {
    width: 119px;
    height: 119px;
  }
  .modal-info-content {
    width: 65%;
    .modal-info-content__head {
      flex-direction: column;
      margin-top: 0;
      .head-title {
        font-size: 20px;
        line-height: 24px;
      }
      .head-time {
        font-size: 17px;
        line-height: 20px;
      }
    }
    .modal-info-content__weight {
      margin: 10px 0 23px;
    }
    .modal-info-content__action-block {
      padding: 0;
      align-items: flex-end;
      .action-block__prcie {
        font-size: 20px;
        line-height: 24px;
        scroll-padding-bottom: 0;
      }
    }
  }
}
</style>