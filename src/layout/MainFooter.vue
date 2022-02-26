<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="footer-container">
      <div class="footer-left">
        <p>
          Copyright {{ year }} <a href="https://www.wiblog.cn">Wiblog | 歪博网</a>. All Rights
          Reserved.
        </p>
        <p><a href="https://beian.miit.gov.cn/">粤ICP备17127817号-1</a></p>
      </div>
      <div class="footer-right">
        <img src="/img/main/qrcode.jpg" alt="" width="90">
        <p>关注微信公众号</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
</style>
