<template>
  <div class="me-craft">
    <div class="filter-type">
      <slot name="meCraft"></slot>
      <div class="filter-container">
        <div
          class="filter-item"
          v-for="item of filterName"
          :key="item"
          @click="selectFilter(item)"
          :class="{ 'active-filter': getFilter(item) }"
        >
          <div class="filter-img" v-html="$store.state.filter[item].img"></div>
          <span
            class="filter-name"
            v-text="$store.state.filter[item].title"
          ></span>
        </div>
      </div>
    </div>
    <div class="food-list">
      <div class="food-list-title" v-html="title"></div>
      <div
        class="food-list-container"
        :class="{ 'home-page': typePage != 'menu' ? true : false }"
      >
        <iten-food
          v-for="itemF of listFood"
          :key="itemF.id"
          :itemFood="itemF"
        ></iten-food>
      </div>
      <div class="menu-list" v-if="typePage != 'menu' ? true : false">
        <a href="/menu">Все блюда &#8594;</a>
      </div>
    </div>
  </div>
</template>

<script>
import itemFood from "@/components/itemFood.vue";
export default {
  components: {
    "iten-food": itemFood,
  },
  props: {
    typePage: {
      type: String,
      default: "menu",
    },
  },
  data() {
    return {
      filterName: [],
      currentFilter: "main",
      title: "",
      listFood: [],
    };
  },
  created() {
    this.filterName = Object.keys(this.$store.state.filter);
    this.titlePars();
    this.listFoodGetCurrent();
  },
  methods: {
    titlePars() {
      this.title =
        this.$props.typePage != "menu"
          ? `${this.$store.state.fireImg} <span>Популярные блюда</span>`
          : `<span>${
              this.$store.state.filter[this.currentFilter].title
            }</span>`;
    },
    listFoodGetCurrent() {
      let tempList = this.$store.state.products.filter(
        (item) => item.type == this.currentFilter
      );
      if (this.$props.typePage != "menu") {
        tempList = tempList.sort((a, b) => {
          return b.valueWeek - a.valueWeek;
        });
        this.listFood = tempList;
        this.listFood.splice(3);
      } else {
        this.listFood = tempList;
      }
    },
    selectFilter(item) {
      this.currentFilter = item;
    },
    getFilter(item) {
      return item == this.currentFilter ? true : false;
    },
  },
  watch: {
    currentFilter() {
      this.titlePars();
      this.listFoodGetCurrent();
    },
  },
};
</script>

<style lang="scss">
.me-craft {
  .filter-type {
    .filter-type__title {
      font-weight: 600;
      font-size: 35px;
      line-height: 42px;
    }
    .filter-container {
      margin: 41px 0 95px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      .filter-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        width: 19%;
        padding: 15px;
        box-sizing: border-box;
        background: #ffffff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        justify-content: space-between;
        transition: transform 1s ease;
        transition: fill 1s ease;
        .filter-name {
          word-wrap: break-word;
          width: 60%;
        }
      }
      .filter-item:hover {
        transform: scale(1.05);
      }
      .active-filter {
        fill: #ff614f;
      }
    }
  }
  .food-list {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .food-list-title {
      display: flex;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      span {
        margin-left: 15px;
      }
    }
    .food-list-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 52px auto 37px;
    }
    .home-page {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
    .menu-list {
      width: fit-content;
      align-self: flex-end;
      padding: 12px 57px;
      background: #eae9e9;
      border: 1px solid #d9d7d7;
      box-sizing: border-box;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
      border-radius: 35px;
      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
      }
    }
  }
}
</style>