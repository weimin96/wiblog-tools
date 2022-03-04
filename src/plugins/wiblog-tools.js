
import '@/assets/scss/wiblog-tools.scss'
import '@/assets/demo/demo.css'
import globalDirectives from './globalDirectives'
import globalMixins from './globalMixins'
import globalComponents from './globalComponents'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import VueClipboard from 'vue-clipboard2'
import 'bootstrap/dist/css/bootstrap.min.css'
// locale.use(lang)
export default {
  install(Vue) {
    Vue.config.devtools = process.env.NODE_ENV === 'development'
    Vue.use(globalDirectives)
    Vue.use(globalMixins)
    Vue.use(globalComponents)
    Vue.use(ElementUI)
    Vue.use(VueClipboard)
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
      }
    })
  }
}
