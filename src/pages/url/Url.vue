<template>
  <div>
    <main-layout :title="title">
      <div class="section section-tabs">
        <div class="container url-container">
          <div class="row">
            <div class="col-md-10 ml-auto col-xl-12 mr-auto">
              <tabs
                slot="raw-content"
                tab-content-classes="tab-content-padding text-center"
              >
                <tab-pane>
                  <template slot="label">
                    缩短网址
                  </template>
                  <div class="row">
                    <div class="main-layout">
                      <el-input v-model="inputVal" placeholder="请输入您要转换的网址" class="input-border">
                        <el-button slot="append">
                          生成短网址
                        </el-button>
                      </el-input>
                      <div class="tip">
                        短网址服务可以帮您把长长的网址压缩
                      </div>
                    </div>
                  </div>
                </tab-pane>
                <tab-pane>
                  <template slot="label">
                    还原网址
                  </template>
                  <div class="row">
                    <div class="main-layout">
                      <el-input v-model="inputVal" placeholder="请输入您要还原的网址" class="input-border">
                        <el-button slot="append">
                          还原网址
                        </el-button>
                      </el-input>
                    </div>
                  </div>
                </tab-pane>
              </tabs>
              <div class="statement">
                免责声明：短网址由用户生成，所跳转的内容与本站无关，仅用于正规合法或被误拦截的网站提供跳转访问服务，使用即遵守本声明，本站概不承担任何法律责任。本站严禁包括但不限于病毒、钓鱼、色情、诈骗、VPN等违法违规内容的网站生成短网址,如有发现立刻封停！
              </div>
            </div>
          </div>
        </div>
      </div>
    </main-layout>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components'
import MainLayout from '../../layout/MainLayout'

export default {
  name: 'ShortUrl',
  components: {
    MainLayout,
    Tabs,
    TabPane
  },
  data() {
    return {
      title: '短网址生成',
      inputVal: ''
    }
  }
}
</script>
<style scoped lang="scss">
.url-container{
  padding: 0 10%;
  /deep/ .tab-space {
    padding: 20px 20px 50px;
  }
}
.container{
  .main-layout {
    margin: 8vh 0 0;
    width: 100%;
    .input-border {
      border: 5px solid #1e2d38;
      border-radius: 8px;
      /deep/ .el-input__inner {
        height: 58px;
        border: none;
        border-radius: 0;
        font-size: 18px;
      }
      /deep/ .el-input-group__append{
        background-color: #1e2d38;
        color: #fff;
        border: none;
        border-radius: 0;
        padding: 0 30px;
        font-size: 16px;
      }
    }
    .tip {
      text-align: left;
      margin-top: 2vh;
      font-size: 16px;
      color: #909399;
    }
  }
}
.statement{
  font-size: 16px;
  color: #a39e9e;
  padding-top: 14px;
  border-top: 2px solid;
}

</style>
