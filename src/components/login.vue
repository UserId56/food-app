<template>
  <div class="login-user">
    <img src="../assets/img/interface/user.svg" alt="user" class="icon" />
    <div
      class="login-user__text login-user__true"
      v-if="login"
      v-text="userName"
    ></div>
    <div
      class="login-user__text login-user__false"
      v-else
      v-text="'Вход'"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: this.$store.state.user.login,
      userName: this.$store.state.user.login,
    };
  },
};
</script>

<style lang="scss">
.login-user {
  cursor: pointer;
  display: flex;
  align-items: center;
  .login-user__text {
    margin: 0 0 0 14px;
  }
}
</style>
