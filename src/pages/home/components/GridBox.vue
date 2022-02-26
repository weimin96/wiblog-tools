<template>
  <div class="grid-box">
    <div class="grid-header" @click="goto()">
      <img v-lazy="icon" alt="h" class="rounded">
      <div class="grid-header-layout">
        <div class="grid-title">
          {{ title }}
        </div>
        <div class="grid-desc">
          {{ desc }}
        </div>
      </div>
    </div>
    <div class="grid-footer">
      <badge type="info">
        {{ label }}
      </badge>
      <div class="grid-footer-right">
        <a href="/" target="_blank">进入 <i class="fa fa-chevron-circle-right" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge } from '@/components'

export default {
  name: 'GridBox',
  components: {
    Badge
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    goto() {
      if (this.url && this.url.indexOf('http') > -1) {
        window.open(this.url)
      } else {
        this.$router.push({ path: this.url })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .grid-box{
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
    background: #ffffff;
    transition: box-shadow .4s,transform .4s;
    border-radius: 5px;
    padding: 15px 0 0;
    //background-image: linear-gradient(to right,#f7f0ac, #acf7f0,#f0acf7);
    .grid-header{
      display: flex;
      flex-flow: row;
      padding: 0 15px;
      img {
        width: 64px;
        height: 64px;
      }
      .grid-header-layout{
        display: flex;
        flex-flow: column wrap;
        margin-left: 2rem;
        justify-content: space-around;
        .grid-title{
          font-size: 1.3em;
          line-height: 1.4em;
          font-weight: 700;
          font-family: Trebuchet MS,"Geneva CE",lucida,'Microsoft YaHei',sans-serif;
        }
        .grid-label{
          //padding: 4px 0;
        }
      }
    }
    .grid-footer{
      //padding: 4px 0;
      margin-top: 1.5rem;
      line-height: 3rem;
      border-top: 1px solid #F3F3F3;
      font-size: 0.8rem;
      padding: 0 15px;
      .grid-footer-right{
        float: right;
      }
    }
    .grid-desc{
      //margin: 0.5rem 0;
    }
    .grid-url{

    }
  }

  .grid-box:hover {
    transform: translateY(-2%);
    box-shadow: 1px 4px 10px 2px #ccc;
  }
</style>
