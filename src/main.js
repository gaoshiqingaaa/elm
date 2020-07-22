import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import myCharts from '@/utils/myCharts'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(myCharts)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
