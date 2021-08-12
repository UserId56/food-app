<template>
  <div class="menu">
    <me-craft :typePage="'menu'"></me-craft>
  </div>
</template>
vue.<script>
import craft from "@/components/craft.vue";

export default {
  name: "Menu",
  components: {
    "me-craft": craft,
  },
};
</script>
<style lang="scss">
</style>