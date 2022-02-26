<template>
  <div>
    <main-layout brand="search">
      <template v-slot:brand>
        <div class="brand-input input-group brand">
          <el-input v-model="searchVal" placeholder="搜索其实很简单" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </div>
      </template>
      <main-tabs />
    </main-layout>
  </div>
</template>
<script>

import MainTabs from './components/MainTabs'
import MainLayout from '../../layout/MainLayout'

export default {
  name: 'Home',
  components: {
    MainTabs,
    MainLayout
  },
  data() {
    return {
      searchVal: ''
    }
  }
}
</script>
<style scoped lang="scss">

</style>
