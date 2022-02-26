<template>
  <div class="main-container section section-tabs">
    <div class="container">
      <div class="row">
        <div class="col-md-10 ml-auto col-xl-12 mr-auto">
          <!-- Nav tabs -->
          <tabs
            slot="raw-content"
            tab-content-classes="tab-content-padding text-center"
          >
            <tab-pane>
              <template slot="label">
                <i class="iconfont icon-tool" /> 工具
              </template>
              <div class="row">
                <div v-for="(item,i) in tool" :key="i" class="col-sm-6  col-xl-3 mr-auto">
                  <grid-box
                    :title="item.title"
                    :desc="item.desc"
                    :icon="item.icon"
                    :label="item.label"
                    :url="item.url"
                  />
                </div>
              </div>
            </tab-pane>
            <tab-pane>
              <template slot="label">
                <i class="iconfont icon-game" /> 游戏
              </template>
              <div class="row">
                <div v-for="(item,i) in game" :key="i" class="col-sm-6  col-xl-3 mr-auto">
                  <grid-box
                    :title="item.title"
                    :desc="item.desc"
                    :icon="item.icon"
                    :label="item.label"
                    :url="item.url"
                  />
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components'
import GridBox from './GridBox'

export default {
  components: {
    GridBox,
    Tabs,
    TabPane
  },
  data() {
    return {
      tool: [
        {
          title: '短网址生成',
          desc: '在线短网址生成工具',
          icon: 'img/svg/link.svg',
          label: '日常类',
          url: 'short-url'
        }
      ],
      game: [{
        title: '猜成语 | Wordle',
        desc: '猜成语游戏',
        icon: 'img/svg/word.svg',
        label: '游戏类',
        url: 'https://word.wiblog.cn/'
      }]
    }
  }
}
</script>
<style>

</style>
