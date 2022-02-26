
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NowUiKit from './plugins/wiblog-tools'

Vue.config.productionTip = false

Vue.use(NowUiKit)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
