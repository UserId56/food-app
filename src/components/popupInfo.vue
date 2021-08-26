<template>
  <div class="all-info-container">
    <div class="modal-info">
      <div class="exit" @click="closeModal"></div>
      <div class="modal-info__container">
        <img :src="itemFood.img" alt="itemFood.title" />
        <div class="modal-info-content">
          <div class="modal-info-content__head">
            <span class="head-title" v-text="itemFood.title"></span>
            <span class="head-time" v-text="itemFood.timeWork + ' мин.'"></span>
          </div>
          <span
            class="modal-info-content__weight"
            v-text="itemFood.weight + ' гр'"
          ></span>
          <div class="line-hr"></div>
          <div class="modal-info-content__action-block">
            <span
              class="action-block__prcie"
              v-text="itemFood.price + ' руб.'"
            ></span>
            <div class="action-block__add-button">Добавить</div>
          </div>
          <div class="line-hr"></div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemFood: {},
    };
  },
  created() {
    this.$store.state.products.forEach((element) => {
      if (element.id == this.$store.state.itemselect) {
        this.itemFood = element;
      } else {
        this.itemFood = {
          img: "../assets/img/food/syr_salat.png",
          title: "Сырой салат",
          description:
            "Сырой салат от гастробара включает в себя: помидоры, огурцы, манго с семинами чиа, листья шпината, что то там еще и все это в лимонно-оливковом масле ",
          price: 450,
          weight: 300,
          ingredients: [1, 2, 3, 3, 3],
          timeWork: 30,
          type: "main",
          valueWeek: 11,
          bannerId: null,
        };
      }
    });
    let ingredients = [];
    this.itemFood.ingredients.forEach((element) => {
      for (let i = 0; i < this.$store.state.ingredients.length; i++) {
        if (element == this.$store.state.ingredients[i].id) {
          ingredients.push(this.$store.state.ingredients[i]);
          break;
        }
      }
    });
    this.itemFood.ingredients = ingredients;
  },
  methods: {
    closeModal() {
      //Меняет showModalInfo в стате
      console.log("closeModal");
    },
  },
};
</script>

<style lang="scss">
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
    .modal-info__container {
      img {
        width: 560px;
      }
      display: flex;
      padding: 30px;
      text-align: left;
    }
    .modal-info-content {
      display: flex;
      flex-direction: column;
      width: 508px;
      margin: 0 auto;
      .modal-info-content__head {
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
      .modal-info-content__weight {
        margin: 24px 0 70px;
        font-size: 17px;
        line-height: 20px;
        color: #757575;
      }
      .line-hr {
        width: 100%;
        border: 1px solid #eeeeee;
      }
      .modal-info-content__action-block {
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
          padding: 11px 55px;
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
          }
        }
        .ingredients-item:not(:first-child):not(:last-child):nth-child(n) {
          margin: 0 5px;
        }
        .ingredients-item:first-child {
          margin: 0 5px 0 0;
        }
        .ingredients-item:last-child {
          margin: 0 0 0 5px;
        }
      }
      .modal-info-content__description {
        font-size: 20px;
        line-height: 28px;
      }
    }
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