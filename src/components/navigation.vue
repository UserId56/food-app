<template>
  <div class="nav-bar">
    <router-link to="/" class="back-page">Главная / </router-link
    ><span class="current-page" v-text="$store.state.pageName[pageName]"></span>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.nav-bar {
  margin: 62px 0 72px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  .back-page {
    color: #868686;
    text-decoration: none;
    position: relative;
  }
  .back-page::after {
    content: "";
    position: absolute;
    left: 0;
    top: 17px;
    width: 0;
    transform: rotate(180deg);
    transition: width 0.5s;
  }
  .back-page:hover:after {
    height: 1px;
    background-color: #868686;
    width: 77%;
  }
}
@media (max-width: 1024px) {
  .nav-bar {
    margin: 22px 0px 35px;
  }
}
</style>