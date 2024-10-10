import Vue from 'vue'
import App from './App.vue'
import {mix, mix2} from './mixin'

Vue.config.productionTip = false
Vue.mixin(mix)
Vue.mixin(mix2)

new Vue({
  el: '#app',
  render: h => h(App)
})