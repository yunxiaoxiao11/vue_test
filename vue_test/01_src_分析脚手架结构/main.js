import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render(createElement) {
    return createElement('h1', 'hello')
  }
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
