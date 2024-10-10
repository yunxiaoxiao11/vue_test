import Vue from 'vue'
import App from './App.vue'
import Plugins from './Plugins'

Vue.config.productionTip = false
Vue.use(Plugins)

new Vue({
  el: '#app',
  render: h => h(App)
})