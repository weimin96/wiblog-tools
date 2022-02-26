<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
