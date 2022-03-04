<template>
  <navbar
    position="fixed"
    type="primary-main"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ms-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img v-lazy="'img/svg/logo.svg'" alt="" class="rounded" style="height: 50px;width: 170px">
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="主页"
          data-placement="bottom"
          href="https://www.wiblog.cn"
          target="_blank"
        >
          <i class="iconfont iconfont-lg icon-home-filling" />
          <p class="d-lg-none d-xl-none">博客</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow me on Github"
          data-placement="bottom"
          href="https://github.com/weimin96"
          target="_blank"
        >
          <i class="iconfont iconfont-lg icon-github" />
          <p class="d-lg-none d-xl-none">Github</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components'
import { Popover } from 'element-ui'

export default {
  name: 'MainNavbar',
  components: {
    Navbar,
    [Popover.name]: Popover
  },
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  }
}
</script>

<style scoped></style>
