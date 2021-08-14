<template>
  <div class="menu">
    <nav-bar :pageName="$route.name"></nav-bar>
    <me-craft :typePage="'menu'" :filter="currentFilter"></me-craft>
    <banner-list />
  </div>
</template>
vue.<script>
import craft from "@/components/craft.vue";
import navigation from "@/components/navigation.vue";
import banner from "@/components/banner.vue";
export default {
  name: "Menu",
  components: {
    "me-craft": craft,
    "nav-bar": navigation,
    "banner-list": banner,
  },
  props: {
    currentFilter: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
</style>