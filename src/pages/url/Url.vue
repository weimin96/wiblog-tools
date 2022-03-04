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
                      <el-input v-model="inputSource" placeholder="请输入您要转换的网址" class="input-border">
                        <el-button slot="append" @click="generateClick">
                          生成短网址
                        </el-button>
                      </el-input>
                      <div class="tip">
                        短网址服务可以帮您把长长的网址压缩
                      </div>
                      <template v-if="showResult">
                        <div class="alert-success">
                          网址已成功缩短
                        </div>
                        <div class="alert-result">
                          <span class="label">短网址</span>
                          <span class="target-val">{{ target }}</span>
                          <span v-clipboard:success="onCopy" v-clipboard:copy="target" class="copy-btn">复制</span>
                        </div>
                      </template>
                    </div>
                  </div>
                </tab-pane>
                <tab-pane>
                  <template slot="label">
                    还原网址
                  </template>
                  <div class="row">
                    <div class="main-layout">
                      <el-input v-model="inputTarget" placeholder="请输入您要还原的网址" class="input-border">
                        <el-button slot="append" @click="restoreClick">
                          还原网址
                        </el-button>
                      </el-input>
                      <template v-if="showTargetResult">
                        <div class="alert-success">
                          网址已成功还原
                        </div>
                        <div class="alert-result">
                          <span class="label">原网址</span>
                          <span class="target-val">{{ originVal }}</span>
                          <span v-clipboard:success="onCopy" v-clipboard:copy="originVal" class="copy-btn">复制</span>
                        </div>
                      </template>
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
import { generate, restore } from '../../api/link'

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
      inputSource: '',
      target: '',
      showResult: false,
      showTargetResult: false,
      inputTarget: '',
      originVal: ''
    }
  },
  methods: {
    generateClick() {
      this.showResult = false
      if (this.inputSource.trim() === '') {
        return
      }
      generate({ url: this.inputSource }).then(res => {
        if (res.code === 200) {
          this.showResult = true
          this.target = res.data
        }
      })
    },
    restoreClick() {
      this.showTargetResult = false
      if (this.inputTarget.trim() === '') {
        return
      }
      restore({ url: this.inputTarget }).then(res => {
        if (res.code === 200) {
          if (res.data !== '') {
            this.showTargetResult = true
            this.originVal = res.data
          } else {
            this.$message.error('没有数据！')
          }
        }
      })
    },
    onCopy() {
      this.$message.success({ message: '已复制到剪贴板！' })
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
      border: 0.5rem solid #1e2d38;
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
    .alert-success{
      padding: 18px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      text-align: left;
      font-size: 18px;
      margin-top: 10px;
      border-radius: 3px;
    }
    .alert-result{
      margin-top: 10px;
      font-size: 18px;
      text-align: left;
      span {
        text-align: center;
        padding: 20px;
        font-weight: 600;
        display: inline-block;
        line-height: 60px;
      }
      .label {
        background: #f2f7ff;
        width: 20%;
      }
      .target-val{
        width: 60%;
        font-size: 24px;
        font-weight: 100;
      }
      .copy-btn{
        width: 20%;
        background: #f2f7ff;
        color: #096dde;
        cursor: pointer;
        font-weight: 700;
        line-height: 60px;
      }
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
