<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/main/header.jpg')"
      />
      <div class="container">
        <div v-if="brand === 'title'" class="brand-title">
          {{ title }}
        </div>
        <slot v-else name="brand" />
      </div>
    </div>
    <slot />
  </div>
</template>
<script>
import { Parallax } from '@/components'

export default {
  name: 'Home',
  bodyClass: 'index-page',
  components: {
    Parallax
  },
  props: {
    brand: {
      type: String,
      default: 'title'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchVal: ''
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  .brand-title{
    font-size: 3rem;
    margin: 8vh 0;
  }
  .brand-input {
    border: 5px solid #acacac;
    margin-top: 10vh;
    border-radius: 3px;
    /deep/ .el-input__inner {
      height: 58px;
      border: none;
      border-radius: 0;
    }
    /deep/ .el-input-group__append{
      background-color: #acacac;
      color: #fff;
      border: none;
      border-radius: 0;
      padding: 0 30px;
      font-size: 16px;
    }
  }
}

</style>
